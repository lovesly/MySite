import React, { Component } from 'react';

class ProfileHeader extends Component {
    render() {
        const { profile } = this.props;

        return (
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-info text-white mb-3">
                    <div className="row">
                        <div className="col-4 col-md-3 m-auto">
                            <img className="rounded-circle" src={ profile.user.avatar } alt="" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="display-4 text-center">{ profile.user.name }</h1>
                        <p className="lead text-center">
                            { profile.status }{ profile.company && <span> at { profile.company }</span> }
                        </p>
                        { profile.location && <p>{ profile.location }</p> }
                        <p>
                            { profile.website && (
                                // herf has a prefix of 'localhost:3000/profile/handle'??
                                <a className="text-white p-2" href={ profile.website } target="_blank">
                                    <i className="fas fa-globe fa-2x"></i>
                                </a> 
                            )}
                            { profile.social && profile.social.facebook && (
                                <a className="text-white p-2" href={ profile.social.facebook }>
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                            )}
                            { profile.social && profile.social.youtube && (
                                <a className="text-white p-2" href={ profile.social.youtube }>
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                            )}
                            { profile.social && profile.social.linkedin && (
                                <a className="text-white p-2" href={ profile.social.linkedin }>
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            )}
                            { profile.social && profile.social.instagram && (
                                <a className="text-white p-2" href={ profile.social.instagram }>
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProfileHeader;