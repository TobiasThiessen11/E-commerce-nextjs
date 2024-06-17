import { uploadImages } from '@/lib/dataDB';
import { CldUploadWidget } from 'next-cloudinary';
import React, { useState } from 'react'

export default function UploadImage() {
    const [resource, setResource] = useState();
  return (
    <div>
        <CldUploadWidget
            uploadPreset="ml_default"
            onSuccess={(result, { widget }) => {
              
              const asset_id = result?.info?.asset_id ?? '';
              const secure_url = result?.info?.secure_url ?? '';
              uploadImages(asset_id, secure_url);
              widget.close();
            }}
          >
            {({ open }) => {
              function handleOnClick() {
                setResource(undefined);
                open();
              }
              return (
                <button onClick={handleOnClick}>
                  Sube una imagen
                </button>
              );
            }}
          </CldUploadWidget>
    </div>
  )
}
