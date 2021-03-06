import {useState, useEffect} from 'react';
import axios from 'axios'
import ImageUploading from "react-images-uploading";


export default function Home() {
  
  const [data, setData] = useState([])
  const [images, setImages] = useState(null);
  const maxNumber = 1;
  

  const requestProcess = () => {
    // console.log(images[0].data_url);
    // , {param: {img: img}}
    // const formData = new FormData();

    // formData.append(
    //         "UploadFile",
    //         images,
    //         images.name
    // );
    // const file = new Blob([images], { type: 'image/jpeg' });
    const data = new FormData();
    data.append('image',
      {
         img:images,
        //  name:'test.jpg',
         type:'image/jpg'
      });
    console.log(images)
   
    
    fetch(`http://127.0.0.1:8000/test/`, {
      method: 'POST',
      headers: {'Content-Type': 'multipart/form-data',
              'accept: application/json'},
      body: images
    })
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    //if there is an error print error
    .catch((error) => {
        console.log(error);
        alert('Error')
    });

  }


  const onChange = (e) => {
    // data for submit
    console.log(e.target.files[0])
    setImages(e.target.files[0]);
    
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-2 bg-purple-600 bg-opacity-25">
    <div className="App">
      {/* <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading> */}
      <form onSubmit={requestProcess}>
          <input type="file" name="image" onChange={onChange} />
          <button>Submit</button>
        </form>
    </div>
     <div>
          {/* <button onClick = {requestProcess} className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Enter
         </button>
        */}
      </div>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

      </main>


      <footer className="flex items-center justify-center w-full h-24 border-t bg-purple-100 bg-opacity-50">
        <a
          className="flex items-center justify-center font-mono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by albert wan, sebastian wueste, and damian ramos

        </a>
      </footer>
    </div>
  )
}
