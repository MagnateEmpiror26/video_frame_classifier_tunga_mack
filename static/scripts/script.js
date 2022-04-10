const loadVideoButton = document.querySelector('.load-video-button')
const videoNameTextBox = document.querySelector('.video-name-textbox')
const loadVideoTextBox = document.querySelector('.upload-video-file-textbox')

const findObjectButton = document.querySelector('.find-video-button')
const objectToFindTextBox = document.querySelector('.object-to-find-textbox')

const imageClassName = document.querySelector('.image-class-name')
const frameName = document.querySelector('.class-name-predicted')

const saveVideoButton = document.querySelector('.save-video-button')
const notification = document.querySelector('.error-bar')
const allowed_exts = ['mp4', '3gp', 'wmv', 'avi']

const imageIndex = document.querySelector('.index-name')
const objectPicture = document.querySelector('.found-object-picture')

findObjectButton.disabled = true
saveVideoButton.disabled = true;
notification.style.display = 'none'

objectToFindTextBox.onclick = ()=> findObjectButton.disabled = false
objectPicture.style.display = 'none'
imageClassName.style.display = 'none'

if(imageIndex.textContent !== ''){
    objectPicture.style.display = 'block'
    imageClassName.style.display = 'flex'
    imageClassName.textContent = frameName.textContent
    objectPicture.src = `static/resized_frames/${imageIndex.textContent}.jpeg` 
}

const showNotification = (notification_message) => {
    notification.style.display = 'block'
    notification.textContent += `${notification_message}, `;
    saveVideoButton.disabled = true;
}

saveVideoButton.addEventListener('click', ()=>console.log('l\'m clicked'))
loadVideoButton.addEventListener('click', ()=> {
    notification.style.display = 'none'
    saveVideoButton.disabled = false;
    notification.textContent = ''
    loadVideoTextBox.click()
})

loadVideoTextBox.onchange = ()=>{
    video = loadVideoTextBox.files[0]
    const video_name = video.name
    const video_size = video.size
    const video_type = video.type

    const ext = video_type.split('/')[1]
    const index = allowed_exts.findIndex(mime => mime === ext)

    console.log(`index: ${index}`)
    console.log(`ext: ${ext}`)
    console.log(`size: ${video_size}`)
    console.log(`type: ${video_type}`)
    console.log(`name: ${video_name}`)

    if(video_type.split('/')[0] !== 'video'){
        showNotification("Videos only, upload a video!")
    }else if(index < 0){
        showNotification("Video extension not compatible.")
     }else if(video_size > 2000000){
        showNotification("Video cannot exceed 10MB.")
    }else{
        videoNameTextBox.value = video_name
        saveVideoButton.disabled = false
    }
}


const proj_owners = document.querySelector('.project-owners')
proj_owners.onclick = ()=> console.log('clicked')