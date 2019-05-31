import React, {Component} from "react";
import { withRouter } from 'react-router'
import './friends.css'
import { FaUserPlus } from 'react-icons/fa';
import { FaUserTimes } from 'react-icons/fa';

class FriendsListItem extends Component {
    // state = {
    //     friends:[]
    // }

    handleClickDelete = (event) => {
        this.props.deleteFriend(this.props.friend.id);
        this.props.history.push("/friends")
    }

    render() {
        return (
            <div>
                <h3>@{this.props.user.firstName}</h3>
                {this.props.isFriend ? <span className="remove-friend" onClick={this.handleClickDelete}><FaUserTimes/></span> : <span className="add-friend"><FaUserPlus/></span>}
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

export default withRouter(FriendsListItem)