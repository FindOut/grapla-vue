# grapla-vue

> Grafisk Plattform för FindOuts modell-appar (for Vue.js)

## Introduction

If you want to git clone this project and run a premade Grapla-Vue test project, check README in the /src folder

The following is for using Grapla-Vue as a github dependency in your own project

## Install

In your package.json file

```bash
"dependencies": {
  "grapla-vue": "https://github.com/FindOut/grapla-vue.git"
}
```

Then run the command:

```bash
npm install grapla-vue
```

## Import

ES6 with vue-loader:

```bash
<script>
import grapla from 'grapla-vue'

export default {
  components: {
    ...grapla.components
  },
  methods: {
    ...grapla.functions
  }
}
</script>
```

ES5:

```bash
var grapla = require("grapla-vue");
```

## Usage

Supports data-driven creation of elements as well as slots

Example JSON:

```bash
data: {
  nodes: [
    {
      id: 0, # all nodes need unique ids if relationships use ids
      text: 'element text', # optional text in elements
      type: 'Box', # type is necessary when using the dynamicComponent
      x: 400, # when using the coordinatesLayout
      y: 100, # when using the coordinatesLayout
      width: 200, # when using the coordinatesLayout
      height: 100, # when using the coordinatesLayout
      children: [ # for nested elements
        {
          id: 1,
          type: 'Ball',
        },
        {
          id: 2,
          type: 'Ball',
        },
      ]
    },
    {
      id: 3,
      type: 'Ball',
      x: 200,
      y: 300,
      width: 100,
      height: 100,
    }
  ],
  relationships: [
    {
      from: 1, # will draw a line between two elements based on id
      to: 2, # will draw a line between two elements based on id
    },
    {
      from: 0,
      to: 3,
    },
    {
      path: 'M200 420,C80 420,80 130,250 130' # will draw a finished path based on string
    }
  ]
}
```

Example HTML:

```bash
# main grapla component
<grapla>

  # flexWrapLayout component for positioning child elements according to flex-wrap flow
  <flex-wrap-layout slot="layout">
    # v-for looping out nodes as boxes based on data array
    <box
      v-for="node in data.nodes"
      :data="node"
      :key="node.id">
      # v-for looping out child nodes as balls based on children array
      <ball
        v-for="childNode in node.children"
        :data="childNode"
        :key="childNode.id">  
      </ball>
    </box>
  </flex-wrap-layout>

  # v-for looping out relationships based on data array
  <relationship
    v-for="(relationship, index) in data.relationships"
    :data="relationship"
    :key="index"
    slot="rels">
  </relationship>

</grapla>
```

Or:

```bash
# main grapla component
<grapla>

  # flexWrapLayout component for positioning child elements according to flex-wrap flow
  <flex-wrap-layout slot="layout">
    # v-for looping out nodes based on data array
    # dynamicComponent will create element based on type variable, like 'Box' or 'Ball'
    <dynamic-component
      v-for="node in data.nodes"
      :data="node"
      :key="node.id">
      # if the node is a box, it will generate child components based on it's children array
      # the ball component cannot have child components
    </dynamic-component>
  </flex-wrap-layout>

  # v-for looping out relationships based on data array
  <relationship
    v-for="(relationship, index) in data.relationships"
    :data="relationship"
    :key="index"
    slot="rels">
  </relationship>

</grapla>
```

Or:

```bash
# main grapla component
<grapla>

  # coordinatesLayout component for absolute positioning child elements
  # set x y width and height on child elements
  <coordinates-layout :data="{width: 900, height: 600}" slot="layout">
    <box :data="{id: 99, text: 'test', x: 300, y: 400, width: 200, height: 100}"></box>
    <ball :data="{id: 100, x: 700, y: 300, width: 150, height: 150}"></ball>
    <box :data="{id: 101, text: 'test test', x: 300, y: 150, width: 100, height: 200}">
      # ball component inside box component
      <ball :data="{id: 102}"></ball>
    </box>
  </coordinates-layout>

  # relationship components that draw a line between two elements based on ids
  <relationship :data="{ from: 99, to: 100 }" slot="rels"></relationship>
  <relationship :data="{ from: 100, to: 102 }" slot="rels"></relationship>
  # relationship component can also take a finished svg path d string
  <relationship :data="{ path: 'M200 400,C100 400,100 150,250 150' }" slot="rels"></relationship>

</grapla>
```

Make sure to set 'slot' attribute on layout and relationship components for grapla to know how to use the component

```bash
# main grapla component
<grapla>
  # layout components use slot 'layout'
  <flex-wrap-layout slot="layout">
    <box :data="{id: 0, text: 'a box'}">
      <ball :data="{id: 1}"></ball>
    </box>
    <box :data="{id: 2, text: 'another box'}"></box>
  </flex-wrap-layout>
  # relationship components use slot 'rels'
  <relationship :data="{ from: 0, to: 2 }" slot="rels"></relationship>
</grapla>
```
