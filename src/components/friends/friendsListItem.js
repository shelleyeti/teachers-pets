import React, {Component} from "react";
// import { Link } from "react-router-dom";
// import "./Animal.css"

class FriendsListItem extends Component {

    // state = {
    //     saveDisabled: false
    // }
        
    // handleClickDelete = (event) => {
    //     this.setState({
    //         saveDisabled: true
    //     })
    //     this.props.deleteAnimal(this.props.animal.id);
    // }

    // handleClickDetails = (event) => {
    //     this.setState({
    //         saveDisabled: true
    //     })
    // }

    render() {
        return (
            <div>
            <h1>@{this.props.user.firstName}</h1>
            {this.props.isFriend ? "X" : "+"}
            </div>
            
            // <div className="card animal-card d-inline-flex col-md-2">
            //     <div className="card-body">
            //         <div className="card-title">
            //         <h5>{this.props.animal.name}</h5>
            //         <img src={dog} className="icon--dog--small" alt="happy dog"/>
            //         </div>
            //         <p className="d-flex justify-content-center">
            //             {this.props.animal.breed}
            //         </p>
            //         <div className="d-flex justify-content-center">
            //             <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
            //         </div>
            //         <div>
            //             <button 
            //             type="button" 
            //             className="btn btn-outline-primary btn-sm" 
            //             onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`); 
            //             }}>
            //             Edit Hat
            //             </button>
            //             <button 
            //             className="btn btn-outline-primary animal-delete-btn btn-sm" 
            //             disabled={ this.state.saveDisabled } 
            //             onClick={this.handleClickDelete}>
            //             Delete Hat
            //             </button>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default FriendsListItem