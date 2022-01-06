const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Le nom est obligatoire')
  }

  if (password.value.length <= 6) {
    messages.push('Votre mot de passe doit contenir au moins 6 caracteres')
  }

  if (password.value.length >= 20) {
    messages.push('Le mot de passe doit comporter moins de 20 caractères')
  }

  if (password.value === 'password') {
    messages.push('ne peut etre un mot de passe')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})