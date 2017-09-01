// import components
import coordinatesLayout from './components/layouts/CoordinatesLayout.vue'
import flexWrapLayout from './components/layouts/FlexWrapLayout.vue'
import ball from './components/nodes/Ball.vue'
import box from './components/nodes/Box.vue'
import dynamicComponent from './components/nodes/DynamicComponent.vue'
import relationship from './components/relationships/Relationship.vue'
import relationshipMarker from './components/relationships/RelationshipMarker.vue'
import grapla from './components/Grapla.vue'

// import functions
import createRelationshipPath from './functions/createRelationshipPath'

export const components = {
  coordinatesLayout,
  flexWrapLayout,
  ball,
  box,
  dynamicComponent,
  relationship,
  relationshipMarker,
  grapla
}

export const functions = {
  createRelationshipPath
}
