import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import { FiEdit } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { FcAddImage } from 'react-icons/fc';
import { BiSave } from 'react-icons/bi';
import Swal from 'sweetalert2';

const imageHostingToken = import.meta.env.VITE_image_hosating;

const InstructorProfile = () => {
    const { user } = useContext(AuthContext);
    const [userDataFromAPI, setUserDataFromAPI] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [editedFields, setEditedFields] = useState({
        fullName: '',
        contactNumber: '',
        aboutMe: '',
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (user && user.email) {
            fetch('https://cm-academy-test-server-production.up.railway.app/users/instructor')
                .then((response) => response.json())
                .then((data) => {
                    const filteredUserData = data.find((item) => item.email === user.email);
                    setUserDataFromAPI(filteredUserData);
                    setEditedFields({
                        fullName: filteredUserData?.fullName || '',
                        contactNumber: filteredUserData?.contactNumber || '',
                        aboutMe: filteredUserData?.aboutMe || '',
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [user]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedFields({
            fullName: userDataFromAPI?.fullName || '',
            contactNumber: userDataFromAPI?.contactNumber || '',
            aboutMe: userDataFromAPI?.aboutMe || '',
        });
    };

    const handleSaveEdit = () => {
        const userEmail = userDataFromAPI.email;

        const updatedUserData = {
            fullName: editedFields.fullName,
            contactNumber: editedFields.contactNumber,
            aboutMe: editedFields.aboutMe,
            email: userEmail,
            userImage: userDataFromAPI.userImage,
        };

        if (selectedImage) {
            updatedUserData.userImage = selectedImage;
        }

        fetch(`https://cm-academy-test-server-production.up.railway.app/users/instructor/${userEmail}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData),
        })
            .then((response) => response.json())
            .then((updatedUserData) => {
                setUserDataFromAPI(updatedUserData);
                setIsEditing(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Your changes have been saved',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: 'Failed to save changes.',
                });
            });
    };

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('image', file);

            fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((imageResult) => {
                    if (imageResult.success) {
                        const imgURL = imageResult.data.display_url;
                        setSelectedImage(imgURL);

                        const updatedUserData = {
                            ...userDataFromAPI,
                            userImage: imgURL,
                        };

                        setUserDataFromAPI(updatedUserData);
                    } else {
                        throw new Error('Failed to get image URL');
                    }
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
                })
                .finally(() => {
                    setIsUploading(false);
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
                    src={selectedImage || userDataFromAPI.userImage || 'default-profile-picture-url.jpg'}
                    alt="Profile Picture"
                    className="w-40 h-40 rounded-full object-cover mx-auto mb-4 hover:scale-105 duration-500"
                />

                <div className="mb-4">
                    <label className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700">
                        {isUploading ? (
                            <div className="flex items-center">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
                            </div>
                        ) : selectedImage ? (
                            <>
                                <button type="button" onClick={handleSaveEdit} className="flex items-center">
                                    <BiSave className="text-3xl text-green-700" />
                                    <span className="text-xl p-2 rounded-lg">Save photo</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <FcAddImage className="text-3xl" />
                                <span className="text-xl p-2 rounded-lg">Upload photo</span>
                                <input
                                    type="file"
                                    {...register('image', { required: true })}
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </>
                        )}
                    </label>
                </div>
            </div>

            {/* Right side with user information */}
            <div className="w-full p-4 relative">
                <div className="mb-4">
                    <p className="font-semibold text-lg">Instructor ID:</p>
                    <p>{userDataFromAPI._id}</p>
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-lg">Full Name:</p>
                    {isEditing ? (
                        <input
                            className="border rounded-md px-2 py-1 w-full"
                            type="text"
                            value={editedFields.fullName}
                            onChange={(e) =>
                                setEditedFields({ ...editedFields, fullName: e.target.value })
                            }
                        />
                    ) : (
                        <p className="font-semibold text-2xl">{userDataFromAPI.fullName}</p>
                    )}
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-lg">Contact Number:</p>
                    {isEditing ? (
                        <input
                            className="border rounded-md px-2 py-1 w-full"
                            type="text"
                            value={editedFields.contactNumber}
                            onChange={(e) =>
                                setEditedFields({ ...editedFields, contactNumber: e.target.value })
                            }
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
                                {userDataFromAPI.email}{' '}
                                <span className="text-red-300 items-end text-lg">Not Editable</span>
                            </p>
                        ) : (
                            <p>{userDataFromAPI.email}</p>
                        )}
                    </div>
                </div>


                <div className="mb-4">
                    <p className="font-semibold text-lg">About Me:</p>
                    {isEditing ? (
                        <textarea
                            className="border rounded-md px-2 py-1 w-full text-base h-28"
                            value={editedFields.aboutMe}
                            onChange={(e) =>
                                setEditedFields({ ...editedFields, aboutMe: e.target.value })
                            }
                        />
                    ) : (
                        <p className='text-xl font-normal'>{userDataFromAPI.aboutMe}</p>
                    )}
                </div>


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

export default InstructorProfile;
