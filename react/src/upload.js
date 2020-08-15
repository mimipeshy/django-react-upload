import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function Upload() {

    const [title, setTitle] = useState("");
    const [file_license, setFileLicense] = useState(null);
    const [file_signatories, setFileSignatories] = useState(null);
    const [file_collection, setFileCollection] = useState(null);

    const onTitleChange = event => setTitle(event.target.value);
    const onLicenceFileChange = event => setFileLicense(event.target.files[0]);
    const onFileSignatoriesChange = event => setFileSignatories(event.target.files[0])
    const onFileCollectionChange = event => setFileCollection(event.target.files[0]);

    const newBook = async () => {
        const uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('file_license', file_license);
        uploadData.append('file_signatories', file_signatories);
        uploadData.append('file_collection', file_collection);

        try {
            return await axios.post(
                'http://127.0.0.1:8000/uploads/', uploadData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
        } catch (e) {
            return e.response ? e.response : e
        }
    }

 return (
    <div className="App">
      <h3>Upload files with React</h3>
      <label>
        Title
        <input
          className="upload-field"
          type="text"
          value={title}
          onChange={onTitleChange}/>
      </label>
      <br/>
      <label>
        File License
        <input
          className="upload-field"
          type="file"
          onChange={onLicenceFileChange} />
      </label>
      <br/>
      <label>
        File Signatory
        <input
          className="upload-field"
          type="file"
          onChange={onFileSignatoriesChange}/>
      </label>
      <br/>
      <label>
        File Collection
        <input
          className="upload-field"
          type="file"
          onChange={onFileCollectionChange}/>
      </label>
      <br/>
      <button className="upload-field" onClick={newBook}>New Record</button><br/>
    </div>


  );
}

export default Upload;
