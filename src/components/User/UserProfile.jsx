import React from 'react';

const UserProfile = () =>{

    return (
        <>
            {/* pulls info in from completed form, editable and updates db when changed */}
            <div>
                {/* upload profile pic */}
                <input type="file" accept="image/*" multiple = "false" />
                <form>
                    <label>Rider First Name</label><input type="text" />
                    <label>Rider Last Name</label><input type="text" />
                    <label>Rider cell phone</label><input type="text" />
                    <label>Rider email</label><input type="text" />
                {/* selector for primary/secondary */}
                    <label>Parent 1 First Name</label><input type="text" />
                    <label>Parent 1 Last Name</label><input type="text" />
                    <label>Parent 1 cell phone</label><input type="text" />
                    <label>Parent 1 home phone</label><input type="text" />

                    <label>Parent 2 First Name</label><input type="text" />
                    <label>Parent 2 Last Name</label><input type="text" />
                    <label>Parent 2 cell phone</label><input type="text" />
                    <label>Parent 2 home phone</label><input type="text" />
                </form>
            </div>
            <button>Edit Profile</button>
        </>
    );
}

export default UserProfile;