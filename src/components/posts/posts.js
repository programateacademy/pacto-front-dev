/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import logo_pacto from '../../assets/img/logo_pacto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../styles/posts.css'

const Posts = (params) => {
    const { username } = useParams();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [token, setToken] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [postToDelete, postdToDelete] = useState(null)
    
    
    const { updatePost, setUpdatePost } = params;

    useEffect(() => {
        let _token = sessionStorage.getItem("token")
		if(_token){
			setToken(_token);
		}else{
            sessionStorage.clear();
            window.location.href = '/'
        }
        axios.get("http://localhost:8000/api/user/get/" + username)
            .then((response) => {
                setName(response.data.name_user);
                setLastName(response.data.lastname);
                axios.get('http://localhost:8000/api/post/', {
				headers: {
					'Authorization': `Bearer ${_token}`
				}
			    }).then(response => setPosts(response.data))
            })
            .catch((error) => {
                console.log(error);
            });
    }, [updatePost])

    const deletePost = () => {
        axios.delete(`http://localhost:8000/api/post/delete/${postToDelete.id}`, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("token")}`
        }
        }).then(response => {
            if(response.data.message === "Post deleted") {
                setUpdatePost(!updatePost)
                cleanData()
            }
        })
    }

    const cleanData = () => {
        setShowModal(!showModal);
        postdToDelete(null)
    }

  return (
    <>
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className="card rounded mt-3 mb-3">
                            <div className="card-header">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center text-start">
                                        <img className="mw-image rounded-circle" src={logo_pacto} alt="" />
                                        <div className="ms-2">
                                            {/* <a className='text-decoration-none text-dark'><p className='mb-0 fs-5 fw-bolder'>{name + " " + lastName}</p></a> */}
                                            <p className="mb-0 text-muted">{moment(moment(post.updated_at).subtract(5, 'hours')).fromNow()}</p>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        {/* <button className="btn p-0" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-more-horizontal icon-lg pb-3px color-corp">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                                <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-meh icon-sm mr-2">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="8" y1="15" x2="16" y2="15"></line>
                                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                                </svg> <span className="">Unfollow</span></a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-corner-right-up icon-sm mr-2">
                                                    <polyline points="10 9 15 4 20 9"></polyline>
                                                    <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                                                </svg> <span className="">Go to post</span></a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-share-2 icon-sm mr-2">
                                                    <circle cx="18" cy="5" r="3"></circle>
                                                    <circle cx="6" cy="12" r="3"></circle>
                                                    <circle cx="18" cy="19" r="3"></circle>
                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                                </svg> <span className="">Share</span></a>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-copy icon-sm mr-2">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg> <span className="">Copy link</span></a>
                                        </div> */}
                                        <button className="btn p-0" type="button" onClick={() => {setShowModal(!showModal); postdToDelete(post)}}>
                                            <FontAwesomeIcon className="color-corp" icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="mb-3 tx-14 text-start">{post.description}</p>
                                {/* <img className="img-fluid" src={validURL(post.image_post) ?  post.image_post : imageDefault} alt="" /> */}
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-evenly post-actions my-2">
                                    <a className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-heart icon-md color-corp">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                        <p className="d-none d-md-block ms-2 mb-0 align-items-center">Me gusta</p>
                                    </a>
                                    <a  className="d-flex align-items-center text-muted mr-4 text-decoration-none color-corp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" srokeLinejoin="round" className="feather feather-message-square icon-md color-corp">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <p className="d-none d-md-block ms-2 mb-0">Comentarios</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                            showModal && postToDelete != null ? 
                            <div className="showModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">¿Deseas eliminar el post?</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { cleanData() }}></button>
                                    </div>
                                    <div class="modal-body">
                                        {postToDelete.description}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { cleanData() }}>Cerrar</button>
                                        <button type="button" className="btn btn-primary" onClick={() => deletePost()}>Eliminar Posts</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                        }
            
    </>
  )
}

export default Posts