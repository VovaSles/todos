import React from 'react'
import {connect} from 'react-redux'
import {createPost,showAlert} from './../redux/actions'
import Alert from './Alert'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }

    }
    onSubmitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if(!title.trim()) {
            return this.props.showAlert("Field cant be ampty.")
        }

        const newPost = {
            title,
            id: Date.now().toString()
        }

        this.props.createPost(newPost);
        this.setState({title: ""})
    }



    inputHandler = event =>{
        event.persist()
       this.setState(prev => ({...prev, ...{
           [event.target.name]: event.target.value
       }}))
    }



    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
             
              {this.props.alert &&  <Alert text={this.props.alert}/>}
                <div className="form-group">
                    <label for="title">Post Label</label>
                    <input
                     type="text" 
                     className="form-control" 
                     id="title"
                     value={this.state.title}
                     name="title"
                     onChange={this.inputHandler}
                     /> 
               </div>
               <button type="submit" className="btn btn-primary">Add Post</button>
           </form>
        )
    }
}
const mapDispatdhToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({
    alert: state.loading.alert
})

export default connect(mapStateToProps, mapDispatdhToProps)(PostForm)