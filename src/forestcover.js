// declarations
const colorScale = d3.scaleSequentialSqrt(d3.interpolateGreens);
var forestCoverYear = "FOREST2020";
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let world;
output.innerHTML = slider.value;
var cur_slider_value = slider.value;

// helper function to extract the actual corresponding data from the geojson for a given forestCoverYear
const getVal = (feat) =>
{ return feat.properties.hasOwnProperty(forestCoverYear) ? feat.properties[forestCoverYear] : 0; }

// simple call to init
init();

// update the displayed year, and also the state of the world polygons each time the slider is moved
slider.oninput = function ()
{
	output.innerHTML = this.value;
	cur_slider_value = this.value;
	forestCoverYear = "FOREST" + cur_slider_value;
	updateWorld();
}

// init function to create the world, and set the initial state
function init()
{
	fetch('../data/forestcover.json').then(res => res.json()).then(countries =>
	{
		// just getting the max forest cover (helps in setting the color scale, see line 1)
		const maxVal = Math.max(...countries.features.map(getVal));
		colorScale.domain([0, maxVal]);	

		world = Globe()
			.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
			.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
			.lineHoverPrecision(0)
			.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
			.polygonAltitude(0.06)
			.polygonCapColor(feat => colorScale(getVal(feat)))
			.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
			.polygonStrokeColor(() => '#111')
			.polygonLabel(({ properties: d}) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d[forestCoverYear]}</i> <br />
			Population: <i>${d.POP_EST}</i>
			`)
			.onPolygonHover(hoverD => world
				.polygonsTransitionDuration(300)
				.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
				.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
			)
			(document.getElementById('globeViz'))
	});

}

function updateWorld()
{
	// once updated forest cover data is fetched (upon changing slider value), update the world polygons
	fetch('../data/forestcover.json').then(res => res.json()).then(countries =>
	{
		const maxVal = Math.max(...countries.features.map(getVal));
		colorScale.domain([0, maxVal]);
		world.polygonsTransitionDuration(0)
		world.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
	});	
}