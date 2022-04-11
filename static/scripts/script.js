const loadVideoButton = document.querySelector('.load-video-button')
const videoNameTextBox = document.querySelector('.video-name-textbox')
const loadVideoTextBox = document.querySelector('.upload-video-file-textbox')

const findObjectButton = document.querySelector('.find-video-button')
const objectToFindTextBox = document.querySelector('.object-to-find-textbox')

const imageClassName = document.querySelector('.image-class-name')
const frameName = document.querySelector('.class-name-predicted')

const saveVideoButton = document.querySelector('.save-video-button')
const notification = document.querySelector('.error-bar')

const imageIndex = document.querySelector('.index-name')
const objectPicture = document.querySelector('.found-object-picture')

findObjectButton.disabled = true
saveVideoButton.disabled = true
notification.style.display = 'none'

objectToFindTextBox.onclick = ()=> findObjectButton.disabled = false
imageClassName.style.display = 'none'

if(imageIndex.textContent !== ''){
    imageClassName.style.display = 'flex'
    imageClassName.textContent = frameName.textContent
    objectPicture.src = `static/resized_frames/${imageIndex.textContent}.jpeg` 
}

const validateVideo = (notification_message) => {
    notification.style.display = 'block'
    notification.textContent = notification_message
    saveVideoButton.disabled = true;
}

loadVideoButton.addEventListener('click', ()=> {
    notification.style.display = 'none'
    saveVideoButton.disabled = false;
    notification.textContent = ''
    loadVideoTextBox.click()
})

loadVideoTextBox.onchange = ()=>{
    video = loadVideoTextBox.files[0]
    const video_name = video.name
    const video_type = video.type

    if(video_type.split('/')[0] !== 'video'){
        validateVideo("Upload a video only!")
    }else if(video.size > 20000000){
        validateVideo("Video cannot exceed 2MB.")
    }else{
        videoNameTextBox.value = video_name
        saveVideoButton.disabled = false
    }
}
