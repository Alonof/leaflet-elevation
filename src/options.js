import * as _ from './utils';

export var Options = {
	autofitBounds: true,
	autohide: false,
	autohideMarker: true,
	almostover: true,
	altitude: true,
	closeBtn: true,
	collapsed: false,
	detached: true,
	distance: true,
	distanceMarkers: { lazy: true, distance: true, direction: true },
	dragging: !L.Browser.mobile,
	downloadLink: 'link',
	elevationDiv: "#elevation-div",
	followMarker: true,
	imperial: false,
	legend: true,
	handlers: [],
	hotline: 'elevation',
	marker: 'elevation-line',
	markerIcon: L.divIcon({
		className: 'elevation-position-marker',
		html: '<i class="elevation-position-icon"></i>',
		iconSize: [32, 32],
		iconAnchor: [16, 16],
	}),
	position: "topright",
	polyline: {
		className: 'elevation-polyline',
		color: '#000',
		opacity: 0.75,
		weight: 5,
		lineCap: 'round'
	},
	polylineSegments: {
		className: 'elevation-polyline-segments',
		color: '#F00',
		interactive: false,
	},
	preferCanvas: false,
	reverseCoords: false,
	ruler: true,
	theme: "lightblue-theme",
	summary: 'inline',
	slope: false,
	speed: false,
	time: false,
	timeFactor: 3600,
	timestamps: false,
	trkStart: L.circleMarker([0,0], { className: 'start-marker', radius: 6, weight: 2, color: '#fff', fillColor: '#00d800', fillOpacity: 1, interactive: false }),
	trkEnd: L.circleMarker([0,0], { className: 'end-marker', radius: 6, weight: 2, color: '#fff', fillColor: '#ff0606', fillOpacity: 1, interactive: false }),
	waypoints: true,
	wptIcons: {
		'': L.divIcon({
			className: 'elevation-waypoint-marker',
			html: '<i class="elevation-waypoint-icon default"></i>',
			iconSize: [30, 30],
			iconAnchor: [8, 30],
		}),
	},
	wptLabels: true,
	xAttr: "dist",
	xLabel: "km",
	yAttr: "z",
	yLabel: "m",
	zFollow: false,
	zooming: !L.Browser.Mobile,

	// Quite uncommon and undocumented options
	margins: { top: 30, right: 30, bottom: 30, left: 40 },
	height: (screen.height * 0.3) || 200,
	width: (screen.width * 0.6) || 600,
	xTicks: undefined,
	yTicks: undefined,

	decimalsX: 2,
	decimalsY: 0,
	forceAxisBounds: false,
	interpolation: "curveLinear",
	skipNullZCoords: false,
	yAxisMax: undefined,
	yAxisMin: undefined,
};
