const colorScale = d3.scaleSequentialSqrt(d3.interpolateGreens);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// GDP per capita (avoiding countries with small pop)

if ('oninput' in slider)
{
	slider.addEventListener(
		'input',
		function ()
		{
			refreshMe()
		},
		false
	);
}

if (slider.value == 2020)
{
	const getVal = feat => feat.properties.FOREST2020;
	fetch('./dataset2.json').then(res => res.json()).then(countries =>
	{
		const maxVal = Math.max(...countries.features.map(getVal));
		console.log(maxVal);
		colorScale.domain([0, maxVal]);

		const world = Globe()
			.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
			.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
			.lineHoverPrecision(0)
			.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
			.polygonAltitude(0.06)
			.polygonCapColor(feat => colorScale(getVal(feat)))
			.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
			.polygonStrokeColor(() => '#111')
			.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2020}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
			.onPolygonHover(hoverD => world
				.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
				.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
			)
			.polygonsTransitionDuration(300)
			(document.getElementById('globeViz'))
	});
}

function refreshMe()
{
	if (slider.value == 2020)
	{
		const getVal = feat => feat.properties.FOREST2020;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2020}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}

	else if (slider.value == 2019)
	{
		const getVal = feat => feat.properties.FOREST1990;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1990}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2018)
	{
		const getVal = feat => feat.properties.FOREST2018;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2018}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2017)
	{
		const getVal = feat => feat.properties.FOREST2017;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2017}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2016)
	{
		const getVal = feat => feat.properties.FOREST2016;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2016}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2015)
	{
		const getVal = feat => feat.properties.FOREST2015;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2015}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2014)
	{
		const getVal = feat => feat.properties.FOREST2014;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2014}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2013)
	{
		const getVal = feat => feat.properties.FOREST2013;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2013}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2012)
	{
		const getVal = feat => feat.properties.FOREST2012;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2012}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2011)
	{
		const getVal = feat => feat.properties.FOREST2011;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2011}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2010)
	{
		const getVal = feat => feat.properties.FOREST2010;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2010}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2009)
	{
		const getVal = feat => feat.properties.FOREST2009;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2009}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2008)
	{
		const getVal = feat => feat.properties.FOREST2008;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2008}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2007)
	{
		const getVal = feat => feat.properties.FOREST2007;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2007}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2006)
	{
		const getVal = feat => feat.properties.FOREST2006;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2006}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2005)
	{
		const getVal = feat => feat.properties.FOREST2005;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2005}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2004)
	{
		const getVal = feat => feat.properties.FOREST2004;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2004}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2003)
	{
		const getVal = feat => feat.properties.FOREST2003;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2003}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2002)
	{
		const getVal = feat => feat.properties.FOREST2002;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2002}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2001)
	{
		const getVal = feat => feat.properties.FOREST2001;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2001}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 2000)
	{
		const getVal = feat => feat.properties.FOREST2000;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST2000}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1999)
	{
		const getVal = feat => feat.properties.FOREST1999;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1999}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1998)
	{
		const getVal = feat => feat.properties.FOREST1998;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1998}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1997)
	{
		const getVal = feat => feat.properties.FOREST1997;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1997}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1996)
	{
		const getVal = feat => feat.properties.FOREST1996;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1996}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1995)
	{
		const getVal = feat => feat.properties.FOREST1995;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1995}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1994)
	{
		const getVal = feat => feat.properties.FOREST1994;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1994}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1993)
	{
		const getVal = feat => feat.properties.FOREST1993;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1993}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1992)
	{
		const getVal = feat => feat.properties.FOREST1992;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1992}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1991)
	{
		const getVal = feat => feat.properties.FOREST1991;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1991}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
	else if (slider.value == 1990)
	{
		const getVal = feat => feat.properties.FOREST1990;
		fetch('./dataset2.json').then(res => res.json()).then(countries =>
		{
			const maxVal = Math.max(...countries.features.map(getVal));
			console.log(maxVal);
			colorScale.domain([0, maxVal]);

			const world = Globe()
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
				.lineHoverPrecision(0)
				.polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
				.polygonAltitude(0.06)
				.polygonCapColor(feat => colorScale(getVal(feat)))
				.polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
				.polygonStrokeColor(() => '#111')
				.polygonLabel(({ properties: d }) => `
			<b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
			Forest Cover <i>${d.FOREST1990}</i> %<br/>
			Population: <i>${d.POP_EST}</i>
			`)
				.onPolygonHover(hoverD => world
					.polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
					.polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
				)
				.polygonsTransitionDuration(300)
				(document.getElementById('globeViz'))
		});
	}
}



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function ()
{
	output.innerHTML = this.value;
}
