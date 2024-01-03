import React from 'react';
import Select from 'react-select';
import './signkawyer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Signlawyer() {
  
    const options = [
        { value: 'option1', label: 'crimes' },
        { value: 'option2', label: 'family issues' },
        { value: 'option3', label: 'divorce' },
        { value: 'option4', label: 'Inheritence' },
        { value: 'option1', label: 'Electronic crime' },
        { value: 'option2', label: 'Robbery' },
        { value: 'option3', label: 'social' },
        { value: 'option4', label: 'Rape' },
        // Add more options as needed
      ];
    
      // State to track selected values
      const [selectedOptions, setSelectedOptions] = React.useState([]);
    
      // Handler for changes in the selected values
      const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
      };
  
    // Handler for changes in the selected values
   
	return (
		<div>
			<div class="container bootstrap snippets bootdey">
    <div class="row signlawyer-page"> 
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
                    <div class="form-group"> 
    					<input type="text" class="form-control input-underline input-lg" placeholder="Describe your career"/> 
    				</div> 
                  
                    <div class="form-group">
                    <label htmlFor="specialities"  class="form-control input-underline input-lg">Add your specialization</label>
                   
      <Select
        id="specialities"
        options={options}
        isMulti
        value={selectedOptions}
        onChange={handleSelectChange}
        isSearchable
        placeholder="Search specialities..."
      
      />
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
export default Signlawyer;

