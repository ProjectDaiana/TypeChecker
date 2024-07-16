const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typeSizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput =document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")


const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

const colorTags = document.querySelectorAll("div.colors div")

//when I type in my sentence tag, update the output tag accordingly
// if there's no value, put the original text
sentenceTag.addEventListener("keyup", function() {
	if (this.value) {
    outputTag.value = this.value
  } else {
     outputTag.value = originalText
  }   
})

// when I type in my output tag, update the sentence tag accordingly
outputTag.addEventListener("keyup", function() {
  sentenceTag.value = this.value
})

//when I change my type slider, update the text next to it AND
// change the outputTag¡s font size
typesizeTag.addEventListener("input", function() {
  outputTag.style.fontSize = this.value + "px"
  typeSizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function() {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

fontweightTag.addEventListener("input", function() {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

//when I change my italic checkbox update the ont style to either normal or italic if it's checked or not
italicTag.addEventListener("change", function() {
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

//when I change my select of typeface, update the font family
typefaceTag.addEventListener("input", function() {
  outputTag.style.fontFamily = this.value
})

//go through all of my color tags
//then when I click one of them change the background color and the text color, and make the class be selected
colorTags.forEach(tag => {
  
  tag.addEventListener("click", function() {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    
    // reset the classes
    colorTags.forEach(tag=> {
      tag.classList.remove("selected")
    })
    
    //only to this clicked one
	  this.classList.add("selected")
  })
  
})
