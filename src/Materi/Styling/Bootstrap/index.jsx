import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Card, Form } from "react-bootstrap";
import { Button } from "bootstrap";


export default class Bootstrap extends React.Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a class="navbar-brand" href="#my">Asep Suryana</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#bio">My Biografi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#co">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="p-5 mb-4 bg-light rounded-3 jumbotron" id="my">
                    <div className="container-lfuid py-5 text-center">
                        <p className="fs-5 fst-italic mt-5 text-center">Siswa Eduwork</p>
                        <h1 className="display-4">Asep Suryana</h1>
                        <div className="button">
                            <a href="http://www.instagram.com" className="btn btn-warning border boder-dark btn-sm mt-5 shadow-sm text-white px-3 py-2"
                            >My instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container text-center" id="bio">
                    <h3 className="fs-bold fs-2">My Biografi</h3>
                    <p className="fs-6 fst-italic fw-light">
                        Haii perkenalkan nama saya Asep Suryana, berasal dari Kampung Cikajang,Kabupaten Garut, Jawa Barat.
                        Kesibukan saya saat ini adalah belajar programing di eduwork,
                        saya berharap dengan belajar di eduwork dapat menambah pengetahuan dan kemampuan saya dalam dunia teknologi.
                        Saya berharap dapat menjadi seorang programer yang handal dan dapat diandalkan oleh perusahaan tempat saya bekerja nanti.
                    </p>
                </div>

                <div className="row text-center">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h5 className="fs-4">Materi Yang di Pelajari</h5>
                        <ul className="navbar-toggler text-center fs-bold fst-italic">
                            <li>Git</li>
                            <li>FrontEnd</li>
                            <li>JavaScript</li>
                            <li>asynchronous</li>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>My Sql</li>
                            <li>Mongo DB</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h5 className="fs-4">Rekan Siswa</h5>
                        <ul className="navbar-toggler text-center fs-bold fst-italic">
                            <li>Asep S</li>
                            <li>Bayu R</li>
                            <li>Baim</li>
                            <li>Sandi</li>
                            <li>Surya</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h5 className="fs-4">Skill Yang Dikuasai</h5>
                        <ul className="navbar-toggler text-center fs-bold fst-italic">
                            <li>Html</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Phyton</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>


                <div className="container mt-5 " id="co">
                    <h3 className="fs-bold fs-2 text-center mb-3">My Contact</h3>
                </div>

                <div className="card-body card mx-auto" style={{ width: '600px' }} >
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Massage</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <div class="d-grid gap-2">
                        <button class="btn btn-warning border border-dark btn-sm mt-1 shadow-sm text-white px-3 py-2">
                            Send
                        </button>
                    </div>

                </div>



                <div className="container-lfluid bg-dark mb-0 mt-5">
                    <footer>
                        <p class="text-white text-center footer">&copy; 2022 Asep Suryana, Inc. All rights reserved

                        </p>
                    </footer>
                </div>


            </>

        )
    }
}