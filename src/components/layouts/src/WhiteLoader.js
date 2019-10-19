import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const WhiteLoader = () => (
    <Dimmer  inverted active><Loader className="pageloader" size='large'>Loading...</Loader></Dimmer>
)

export default WhiteLoader