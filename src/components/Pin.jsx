"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'

const Pin = ({item,key}) => {
  

    const icon = L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png', iconSize:new L.point(30, 30), iconAnchor: "pinAnchor" ,className:"object-contain" });
  return ( 
    <div key={key}>
         <Marker position={[item?.latitude, item?.longitude]} icon={icon}>
    <Popup>
    <div className="flex gap-1 w-full">
            {/* <Image src={item?.images[0]} alt='' width={50} height={50}/> */}
            <div className="">
                <Link href={`/singlepage/${item.id}`}>{item.title} </Link>
                <span>{item.bedroom}bedroom </span>
                <b>$ {item.price} </b> 
            </div>
        </div>
    </Popup>
  </Marker>
    </div>
  )
}

export default Pin