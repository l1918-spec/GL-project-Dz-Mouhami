import React from 'react';
import './logIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function log() {
  
	return (
		<div>
			<div class="container bootstrap snippets bootdey">
    <div class="row login-page"> 
        <div class="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
    		<img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="user-avatar img-thumbnail"/> 
    		<h2 class='first'>Let's get you started</h2>
    		<form role="form" class="ng-pristine ng-valid"> 
    			<div class="form-content"> 
    				<div class="form-group"> 
    					<input type="text" class="form-control input-underline input-lg" placeholder="Email"/> 
    				</div> 
					
    				<div class="form-group"> 
    					<input type="password" class="form-control input-underline input-lg" placeholder="Password"/> 
    				</div> 
    			</div> 
    			<button class="btn1">
                    Log in
    			</button> &nbsp; 
          <h4 className='second'>Don't have an account? </h4><a href=''><h4 className='third' > Join Us now</h4></a>
    			<div className='btns flex-d'>
          <button  class="btn2"> <a href='/SignUp'>Register </a></button>
          <button   class="btn3"><a href='/lawyer-sign'>Join as lawyer</a></button></div>
    		</form> 
    	</div> 
    </div>
</div>
		</div>
	);
}
export default log;

