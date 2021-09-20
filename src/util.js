export const simplifyData = (apiData) => {

 const simpleData = apiData.map(data => {
    return {
      id: data['id'],
      image:data['img_src'],
      name: data.rover['name'],
      cameraName:data.camera['full_name'],
      date: data['earth_date'],
    }
  })

  return simpleData;
}
