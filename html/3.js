(this.webpackJsonpbinar_calculator =
	this.webpackJsonpbinar_calculator || []).push([
	[0],
	{
		136: function (e, t, n) {},
		137: function (e, t, n) {},
		138: function (e, t, n) {},
		139: function (e, t, n) {},
		140: function (e, t, n) {
			"use strict";
			n.r(t);
			var s = n(17),
				i = n(18),
				r = n(32),
				l = n(21),
				h = n(22),
				a = n(0),
				c = n.n(a),
				o = n(5),
				u = n.n(o);
			Boolean(
				"localhost" === window.location.hostname ||
					"[::1]" === window.location.hostname ||
					window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
					)
			);
			var m = n(71),
				p =
					(n(135),
					n(136),
					n(137),
					n(138),
					n(139),
					(function (e) {
						Object(h.a)(n, e);
						var t = Object(l.a)(n);
						function n() {
							return (
								Object(s.a)(this, n),
								t.apply(this, arguments)
							);
						}
						return (
							Object(i.a)(n, [
								{
									key: "render",
									value: function () {
										return c.a.createElement(
											"div",
											{
												className: this
													.props.final
													? "indincator-f"
													: "indincator",
											},
											c.a.createElement(
												"p",
												{
													className: this
														.props.final
														? "indicator__name-f"
														: "indicator__name",
												},
												this.props.name +
													":"
											),
											c.a.createElement(
												"p",
												{
													className: this
														.props.final
														? "indicator__result-f"
														: "indicator__result",
												},
												this.props.curr
													? c.a.createElement(
														  "svg",
														  {
															  width:
																  "153",
															  height:
																  "152",
															  viewBox:
																  "0 0 153 152",
															  fill:
																  "none",
															  xmlns:
																  "http://www.w3.org/2000/svg",
														  },
														  c.a.createElement(
															  "path",
															  {
																  d:
																	  "M25 93.5L0 152H27L76 37.5L126 152H152.5L127.5 93.5H149.5V76H120L116.5 69H149.5V51.5H109L86 0H65.5L43 51.5H4.5V69H35.5L32.5 76H4.5V93.5H25Z",
																  fill:
																	  "#4999EA",
															  }
														  )
													  )
													: "",
												this.props.result
											)
										);
									},
								},
							]),
							n
						);
					})(c.a.Component)),
				d = {
					100: {
						first: 100,
						second: 1.02,
						third: 0.02,
						fourth: 1.03,
						fifth: 200,
						sixth: 5,
						seventh: 3,
						eight: 0,
						nineth: 0,
						tenth: 208,
					},
					250: {
						first: 250,
						second: 1.02,
						third: 0.04,
						fourth: 2.065,
						fifth: 200,
						sixth: 5.5,
						seventh: 3.5,
						eight: 0,
						nineth: 0,
						tenth: 530,
					},
					500: {
						first: 500,
						second: 1.02,
						third: 0.06,
						fourth: 5.4,
						fifth: 200,
						sixth: 6,
						seventh: 4,
						eight: 0,
						nineth: 0,
						tenth: 1080,
					},
					1e3: {
						first: 1e3,
						second: 1.02,
						third: 0.08,
						fourth: 11,
						fifth: 200,
						sixth: 6.5,
						seventh: 4.5,
						eight: 0.5,
						nineth: 0,
						tenth: 2200,
					},
					2500: {
						first: 2500,
						second: 1.02,
						third: 0.1,
						fourth: 28,
						fifth: 200,
						sixth: 7,
						seventh: 5,
						eight: 1,
						nineth: 0,
						tenth: 5600,
					},
					5e3: {
						first: 5e3,
						second: 1.02,
						third: 0.12,
						fourth: 57,
						fifth: 200,
						sixth: 7.5,
						seventh: 5.5,
						eight: 1.5,
						nineth: 0,
						tenth: 11400,
					},
					1e4: {
						first: 1e4,
						second: 1.02,
						third: 0.14,
						fourth: 116,
						fifth: 200,
						sixth: 8,
						seventh: 6,
						eight: 1.5,
						nineth: 1,
						tenth: 23200,
					},
					2e4: {
						first: 2e4,
						second: 1.02,
						third: 0.16,
						fourth: 256,
						fifth: 200,
						sixth: 8.5,
						seventh: 6.5,
						eight: 2,
						nineth: 1,
						tenth: 47200,
					},
					35e3: {
						first: 35e3,
						second: 1.02,
						third: 0.18,
						fourth: 420,
						fifth: 200,
						sixth: 9,
						seventh: 7,
						eight: 2.5,
						nineth: 1.5,
						tenth: 84e3,
					},
					5e4: {
						first: 5e4,
						second: 1.02,
						third: 0.2,
						fourth: 610,
						fifth: 200,
						sixth: 10,
						seventh: 7.5,
						eight: 3,
						nineth: 2,
						tenth: 122e3,
					},
					75e3: {
						first: 75e3,
						second: 1.02,
						third: 0.22,
						fourth: 930,
						fifth: 200,
						sixth: 11,
						seventh: 8,
						eight: 3.5,
						nineth: 2.5,
						tenth: 186e3,
					},
					1e5: {
						first: 1e5,
						second: 1.02,
						third: 0.25,
						fourth: 1270,
						fifth: 200,
						sixth: 12,
						seventh: 8.5,
						eight: 4,
						nineth: 3,
						tenth: 254e3,
					},
				},
				f = (function (e) {
					Object(h.a)(n, e);
					var t = Object(l.a)(n);
					function n() {
						return (
							Object(s.a)(this, n),
							t.apply(this, arguments)
						);
					}
					return (
						Object(i.a)(n, [
							{
								key: "render",
								value: function () {
									return c.a.createElement(
										"div",
										{ className: "indicators" },
										c.a.createElement(p, {
											name: "Выбранный пакет",
											result:
												d[this.props.value]
													.first,
											curr: !0,
										}),
										c.a.createElement(p, {
											name:
												"Текущая базовая ставка доходности",
											result:
												d[this.props.value]
													.second + "%",
										}),
										c.a.createElement(p, {
											name:
												"Надбавка к базовой ставке доходности",
											result:
												d[this.props.value]
													.third + "%",
										}),
										c.a.createElement(p, {
											name:
												"Ежедневное начисление",
											result:
												d[this.props.value]
													.fourth + "*",
											curr: !0,
										}),
										c.a.createElement(p, {
											name: "Период работы",
											result:
												d[this.props.value]
													.fifth +
												" Дней",
										}),
										c.a.createElement(p, {
											name:
												"Бинарная премия с меньшей ноги",
											result:
												d[this.props.value]
													.sixth + "%",
										}),
										c.a.createElement(p, {
											name:
												"Премия за продажи с 1-ой линии",
											result:
												d[this.props.value]
													.seventh + "%",
										}),
										c.a.createElement(p, {
											name:
												"Премия за продажи со 2-ой линии",
											result:
												d[this.props.value]
													.eight + "%",
										}),
										c.a.createElement(p, {
											name:
												"Премия за продажи с 3-ей линии",
											result:
												d[this.props.value]
													.nineth + "%",
										}),
										c.a.createElement(p, {
											name:
												"Итого за весь период вы получите",
											result:
												d[this.props.value]
													.tenth + "*",
											final: !0,
											curr: !0,
										}),
										c.a.createElement(
											"p",
											{
												className:
													"warning",
											},
											"* Данный расчёт был произведён по средней базовой ставке доходности за весь срок работы программы. Так как базовая ставка доходности плавающая и может изменяться ежедневно, итоговая сумма может отличаться от текущего расчёта."
										)
									);
								},
							},
						]),
						n
					);
				})(c.a.Component),
				v = (function (e) {
					Object(h.a)(a, e);
					var n = Object(l.a)(a);
					function a(e) {
						var t;
						return (
							Object(s.a)(this, a),
							((t = n.call(
								this,
								e
							)).svg = c.a.createElement(
								"svg",
								{
									width: "153",
									height: "152",
									viewBox: "0 0 153 152",
									fill: "none",
									xmlns:
										"http://www.w3.org/2000/svg",
								},
								c.a.createElement("path", {
									d:
										"M25 93.5L0 152H27L76 37.5L126 152H152.5L127.5 93.5H149.5V76H120L116.5 69H149.5V51.5H109L86 0H65.5L43 51.5H4.5V69H35.5L32.5 76H4.5V93.5H25Z",
									fill: "#4999EA",
								})
							)),
							(t.handleDrag = t.handleDrag.bind(
								Object(r.a)(t)
							)),
							t
						);
					}
					return (
						Object(i.a)(a, [
							{
								key: "handleDrag",
								value: function (e) {
									0 === e &&
										this.props.handleFunc(100),
										7 === e &&
											this.props.handleFunc(
												250
											),
										15 === e &&
											this.props.handleFunc(
												500
											),
										23 === e &&
											this.props.handleFunc(
												1e3
											),
										32 === e &&
											this.props.handleFunc(
												2500
											),
										40.5 === e &&
											this.props.handleFunc(
												5e3
											),
										50 === e &&
											this.props.handleFunc(
												1e4
											),
										60 === e &&
											this.props.handleFunc(
												2e4
											),
										69 === e &&
											this.props.handleFunc(
												35e3
											),
										79 === e &&
											this.props.handleFunc(
												5e4
											),
										89 === e &&
											this.props.handleFunc(
												75e3
											),
										100 === e &&
											this.props.handleFunc(
												1e5
											);
								},
							},
							{
								key: "render",
								value: function () {
									return c.a.createElement(
										"div",
										{ className: "term" },
										c.a.createElement(
											"div",
											{
												className:
													"term-blocks",
											},
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"100"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"250"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"500"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"1000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"2500"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"5000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"10 000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"20 000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"35 000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"50 000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"75 000"
												)
											),
											c.a.createElement(
												"div",
												{
													className:
														"block",
												},
												c.a.createElement(
													"p",
													null,
													this.svg,
													"100 000"
												)
											)
										),
										c.a.createElement(
											"div",
											{
												className:
													"term__line",
											},
											c.a.createElement(m.a, {
												min: 0,
												defaultValue: 1,
												onChange: this
													.handleDrag,
												marks: {
													0: 0,
													7: 0,
													15: 0,
													23: 0,
													32: 0,
													40.5: 0,
													50: 0,
													60: 0,
													69: 0,
													79: 0,
													89: 0,
													100: 0,
												},
												step: null,
											})
										)
									);
								},
							},
						]),
						a
					);
				})(c.a.Component),
				E = (function (e) {
					Object(h.a)(a, e);
					var n = Object(l.a)(a);
					function a(e) {
						var t;
						return (
							Object(s.a)(this, a),
							((t = n.call(this, e)).state = {
								value: 100,
							}),
							(t.updateValue = t.updateValue.bind(
								Object(r.a)(t)
							)),
							t
						);
					}
					return (
						Object(i.a)(a, [
							{
								key: "updateValue",
								value: function (e) {
									var t = this;
									this.setState(
										{ value: e },
										function () {
											return console.log(
												t.state
											);
										}
									);
								},
							},
							{
								key: "render",
								value: function () {
									return c.a.createElement(
										"div",
										{ className: "main" },
										c.a.createElement(
											"h2",
											{
												className:
													"main__topic",
											},
											"Калькулятор доходности"
										),
										c.a.createElement(v, {
											handleFunc: this
												.updateValue,
										}),
										c.a.createElement(f, {
											value: this.state.value,
										})
									);
								},
							},
						]),
						a
					);
				})(c.a.Component);
			u.a.render(
				c.a.createElement(E, null),
				document.getElementById("root")
			),
				"serviceWorker" in navigator &&
					navigator.serviceWorker.ready
						.then(function (e) {
							e.unregister();
						})
						.catch(function (e) {
							console.error(e.message);
						});
		},
		72: function (e, t, n) {
			e.exports = n(140);
		},
	},
	[[72, 1, 2]],
]);
