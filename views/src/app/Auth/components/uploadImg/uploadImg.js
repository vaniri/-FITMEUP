import React from "react";
import ImageUploader from "react-images-upload";
import axios from 'axios';

const UploadImg = props => {

    let senduserImg = async (_, images) => {
        try {
            const res = await axios.patch(`http://localhost:3001/api/users/${localStorage.userId}`, { image: images[0] });
            if (res.status === 204) {
                console.log("User image uploaded successfully");
                console.log(res.data);
                props.handleSelection(images[0]);
            } else {
                console.log("FAIL upload user image");
            }
        } catch (err) {
            console.log("FAIL upload user image: ", err);
        }
    }

    return (
            <ImageUploader
                {...props}
                withIcon={true}
                onChange={senduserImg}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880000}
                singleImage={true}
            />
    );
};

export default UploadImg;
