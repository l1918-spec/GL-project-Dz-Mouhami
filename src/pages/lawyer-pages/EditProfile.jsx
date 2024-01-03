import "./bootstrap.min.css";


export default function EditProfile(){

    return (
        <div className={"bg-dark text-white"} style={{height:'100vh'}}>
            <div className="container bootstrap snippets bootdey">
                <h1 className="text-primary">Lawyer Edit Profile</h1>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                className="avatar img-circle img-thumbnail"
                                alt="avatar"
                            />
                            <h6>Upload a different photo...</h6>

                            <input type="file" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-9 personal-info">
                        <div className="alert alert-info alert-dismissable">
                            <a className="panel-close close" data-dismiss="alert"></a>
                            <i className="fa fa-coffee"></i>
                            This is an <strong>.alert</strong>. Use this to show important
                            messages to the user.
                        </div>
                        <h3>Personal info</h3>

                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Adress:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Number phone :</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Company:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-lg-3 control-label">Email:</label>
                                <div class="col-lg-8">
                                    <input class="form-control" type="text" />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Submit" className={"bg-primary rounded-1 border-0 py-2 mt-2 text-white p-3"}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </div>


    )
}