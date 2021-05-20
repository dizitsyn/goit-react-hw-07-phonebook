import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'


 function Filter({filterHandler,filter}) {
    return (
        <label>find
        <input
            value = {filter}
            onChange={filterHandler} />
        </label>
    )
}

const mapStateToProps = (state) => ({
    value: state.contacts.filter 
})

const mapDispatchToProps = dispatch => ({
    filterHandler: e=>dispatch(actions.filter(e.target.value))
})



export default connect(mapStateToProps,mapDispatchToProps )(Filter) 