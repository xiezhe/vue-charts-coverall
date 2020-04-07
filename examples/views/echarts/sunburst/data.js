const data1 = [{
    children: [{
        value: 5,
        children: [{
            value: 1,
            itemStyle: {
                color: '#F54F4A'
            }
        }, {
            value: 2,
            children: [{
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }]
        }, {
            children: [{
                value: 1
            }]
        }],
        itemStyle: {
                color: '#F54F4A'
            }
    }, {
        value: 10,
        children: [{
            value: 6,
            children: [{
                value: 1,
                itemStyle: {
                color: '#F54F4A'
            }
            }, {
                value: 1
            }, {
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }, {
                value: 1
            }],
            itemStyle: {
    color: '#FFB499'
}
        }, {
            value: 2,
            children: [{
                value: 1
            }],
            itemStyle: {
    color: '#FFB499'
}
        }, {
            children: [{
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }]
        }],
        itemStyle: {
                color: '#F54F4A'
            }
    }],
    itemStyle: {
                color: '#F54F4A'
            }
}, {
    value: 9,
    children: [{
        value: 4,
        children: [{
            value: 2,
            itemStyle: {
    color: '#FF8C75'
}
        }, {
            children: [{
                value: 1,
                itemStyle: {
                color: '#F54F4A'
            }
            }]
        }],
        itemStyle: {
                color: '#F54F4A'
            }
    }, {
        children: [{
            value: 3,
            children: [{
                value: 1
            }, {
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }]
        }],
        itemStyle: {
    color: '#FFB499'
}
    }],
    itemStyle: {
    color: '#FF8C75'
}
}, {
    value: 7,
    children: [{
        children: [{
            value: 1,
            itemStyle: {
    color: '#FFB499'
}
        }, {
            value: 3,
            children: [{
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }, {
                value: 1
            }],
            itemStyle: {
    color: '#FF8C75'
}
        }, {
            value: 2,
            children: [{
                value: 1
            }, {
                value: 1,
                itemStyle: {
                color: '#F54F4A'
            }
            }],
            itemStyle: {
                color: '#F54F4A'
            }
        }],
        itemStyle: {
    color: '#FFB499'
}
    }],
    itemStyle: {
                color: '#F54F4A'
            }
}, {
    children: [{
        value: 6,
        children: [{
            value: 1,
            itemStyle: {
    color: '#FF8C75'
}
        }, {
            value: 2,
            children: [{
                value: 2,
                itemStyle: {
    color: '#FF8C75'
}
            }],
            itemStyle: {
                color: '#F54F4A'
            }
        }, {
            value: 1,
            itemStyle: {
    color: '#FFB499'
}
        }],
        itemStyle: {
    color: '#FFB499'
}
    }, {
        value: 3,
        children: [{
            value: 1,
        }, {
            children: [{
                value: 1,
                itemStyle: {
    color: '#FF8C75'
}
            }]
        }, {
            value: 1
        }],
        itemStyle: {
    color: '#FFB499'
}
    }],
    itemStyle: {
                color: '#F54F4A'
            }
}];
export const renderData = [
    {
        title: {
            text: '旭日图(sunburst)'
        },
        chartsData: data1,
        chartsOption: {
            // 针对 全局
            seriesSetting: {
                radius: ['10%', '80%'],
                sort: null,
                highlightPolicy: 'ancestor',
                label: {
                    rotate: 'radial'
                },
                levels: [],
                itemStyle: {
                    color: '#ddd',
                    borderWidth: 2
                }
            }
        }
    }
];
