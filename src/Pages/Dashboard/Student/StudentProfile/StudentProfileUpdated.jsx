import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { FcAddImage } from "react-icons/fc";
import { BiSave } from "react-icons/bi";





const imageHostingToken = import.meta.env.VITE_image_hosating;

console.log(imageHostingToken);

const StudentProfileUpdated = () => {
    const { user } = useContext(AuthContext);
    const [userDataFromAPI, setUserDataFromAPI] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [editedFields, setEditedFields] = useState({
        fullName: '',
        contactNumber: '',
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    useEffect(() => {
        if (user && user.email) {
            fetch("https://cm-academy-test-server-production.up.railway.app/users/student")
                .then(response => response.json())
                .then(data => {
                    const filteredUserData = data.find(item => item.email === user.email);
                    setUserDataFromAPI(filteredUserData);
                    setEditedFields({
                        fullName: filteredUserData?.fullName || '',
                        contactNumber: filteredUserData?.contactNumber || '',
                    });
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, [user]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        // Reset the editedFields with the current values from userDataFromAPI
        setEditedFields({
            fullName: userDataFromAPI?.fullName || '',
            contactNumber: userDataFromAPI?.contactNumber || '',
        });
    };

    console.log(userDataFromAPI);

    const handleSaveEdit = () => {
        // Extract the user's email from userDataFromAPI
        const userEmail = userDataFromAPI.email;

        // Create a new object with the updated fields including email and image URL
        const updatedUserData = {
            fullName: editedFields.fullName,
            phone: editedFields.contactNumber,
            email: userEmail, // Use the user's email
            userImage: userDataFromAPI.userImage, // Include the existing image URL
        };

        // Check if a new image has been selected
        if (selectedImage) {
            // Update the userImage with the ImageBB URL
            updatedUserData.userImage = selectedImage; // Use the selectedImage URL as the new image
        }

        console.log(updatedUserData);

        fetch(`https://cm-academy-test-server-production.up.railway.app/users/student/${userEmail}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData), // Send the updatedUserData object
        })
            .then((response) => response.json())
            .then((updatedUserData) => {
                // Update the user data with the updated name, phone, and image URL
                setUserDataFromAPI(updatedUserData);
                setIsEditing(false);
            })
            .catch((error) => {
                console.error("Error updating user data:", error);
            });
    };




    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading(true); // Start the uploading state
            const formData = new FormData();
            formData.append("image", file);

            fetch(img_hosting_url, {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((imageResult) => {
                    if (imageResult.success) {
                        const imgURL = imageResult.data.display_url;
                        setSelectedImage(imgURL); // Set the selectedImage to the ImageBB URL

                        const updatedUserData = {
                            ...userDataFromAPI,
                            userImage: imgURL,
                        };

                        // Update the user data with the new profile image URL
                        setUserDataFromAPI(updatedUserData);

                        // You can optionally send this updated image URL to your server to update the database.
                    } else {
                        throw new Error("Failed to get image URL");
                    }
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                })
                .finally(() => {
                    setIsUploading(false); // Finish the uploading state
                });
        }
    };



    if (!userDataFromAPI) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-between items-start w-3/5 mx-auto mt-20">
            {/* Left side with profile picture */}
            <div className="w-1/2 p-4 flex flex-col items-center">
                <img
                    src={
                        selectedImage || userDataFromAPI.userImage || "default-profile-picture-url.jpg"
                    }
                    alt="Profile Picture"
                    className="w-40 h-40 rounded-full object-cover mx-auto mb-4 hover:scale-105 duration-500"
                />

                <div className="mb-4">
                    <label className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                        {isUploading ? ( // Render the spinner when uploading
                            <div className="flex items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
                          </div>
                        ) : selectedImage ? (
                            // Display "Save photo" when an image is selected
                            <>
                                <button
                                    type="button"
                                    onClick={handleSaveEdit}
                                    className=" flex items-center"
                                >
                                    <BiSave className="text-3xl text-green-700" />
                                    <span className=" text-xl p-2 rounded-lg">Save photo</span>
                                </button>
                            </>
                        ) : (
                            // Display "Upload photo" when no image is selected
                            <>
                                <FcAddImage className="text-3xl" />
                                <span className=" text-xl p-2 rounded-lg">Upload photo</span>
                                <input
                                    type="file"
                                    {...register("image", { required: true })}
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </>
                        )}
                    </label>
                </div>
            </div>



            {/* Right side with user information */}
            <div className="w-1/2 p-4 relative"> {/* Added relative positioning */}
                <div className="mb-4">
                    <p className="font-semibold text-lg">Student ID:</p>
                    <p>{userDataFromAPI._id}</p>
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-lg">Full Name:</p>
                    {isEditing ? (
                        <input
                            className="border rounded-md px-2 py-1 w-full"
                            type="text"
                            value={editedFields.fullName}
                            onChange={(e) => setEditedFields({ ...editedFields, fullName: e.target.value })}
                        />
                    ) : (
                        <p className="font-semibold text-2xl">{userDataFromAPI.fullName}</p>
                    )}
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-lg">Phone:</p>
                    {isEditing ? (
                        <input
                            className="border rounded-md px-2 py-1 w-full"
                            type="text"
                            value={editedFields.contactNumber}
                            onChange={(e) => setEditedFields({ ...editedFields, contactNumber: e.target.value })}
                        />
                    ) : (
                        <p>{userDataFromAPI.contactNumber}</p>
                    )}
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-lg">Email Address:</p>
                    <div className={`w-full ${isEditing ? 'bg-gray-100' : 'bg-white'}`}>
                        {isEditing ? (
                            <p className="ml-2 text-gray-400 border rounded-md px-2 py-1">
                                {userDataFromAPI.email} <span className="text-red-300 items-end text-lg">Not Editable</span>
                            </p>
                        ) : (
                            <p>{userDataFromAPI.email}</p>
                        )}
                    </div>
                </div>

                {/* Buttons aligned to the right-top within the profile section */}
                <div className="absolute top-0 right-0 mt-4 mr-4">
                    {isEditing ? (
                        <div className="flex justify-end text-lg">
                            <button
                                className="flex items-center text-red-500 hover:text-red-700 transition duration-300"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-green-500 hover:text-green-700 ml-2 transition duration-300"
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        <button
                            className="flex items-center text-lg text-green-500 hover:text-green-700 transition duration-300"
                            onClick={handleEditClick}
                        >
                            <FiEdit /> Edit
                        </button>
                    )}
                </div>
            </div>
        </div>



    );
};

export default StudentProfileUpdated;
