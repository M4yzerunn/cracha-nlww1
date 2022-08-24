const LinksSocialMedia = {
    github:"M4yzerunn",
    youtube: "channel/UCcFpUn7FN67LeULJQSFqSZw",
    facebook: "m4yzerunn",
    instagram: "m4yzzzzi",
    twitter: "m4zerunn"
   }

   function changeSocialMediaLinks() {

    for (let li of socialLinks.children){
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      
    }
   }

   changeSocialMediaLinks()


function getGitHubProfileInfos() {
 const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
 fetch(url)
 .then(Response =>  Response.json())
 .then(data => {
   userName.textContent = data.name
   userBio.textContent = data.bio
   userLink.href = data.html_url
   userImage.src = data.avatar_url 
   userLogin.textContent = data.login
   })

}

getGitHubProfileInfos()