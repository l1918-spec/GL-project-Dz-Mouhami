import React from 'react';
import './Sign.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Sign() {
  
	return (
		<div>
			<div class="container bootstrap snippets bootdey">
    <div class="row login-page"> 
        <div class="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
    		<img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="user-avatar img-thumbnail"/> 
    		<h2 class='first'>Let's set you up</h2>
    		<form role="form" class="ng-pristine ng-valid"> 
    			<div class="form-content"> 
    				<div class="form-group"> 
    					<input type="text" class="form-control input-underline input-lg" placeholder="Full Name"/> 
    				</div> 
            <div class="form-group"> 
    					<input type="text" class="form-control input-underline input-lg" placeholder="Phone Number"/> 
    				</div> 
            <div class="form-group"> 
    					<input type="text" class="form-control input-underline input-lg" placeholder="Email"/> 
    				</div> 
					
    				<div class="form-group"> 
    					<input type="password" class="form-control input-underline input-lg" placeholder="Password"/> 
    				</div> 
    			</div> 
    			<button class="btn1">
                    Register
    			</button> &nbsp; 
        
    		
    		</form> 
    	</div> 
    </div>
</div>
		</div>
	);
}
export default Sign;

