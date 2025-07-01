export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function getImagePath(imagePath: string) {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com'
  if (imagePath.startsWith(cloudinaryBaseUrl)) {
    return imagePath
  } else {
    return `/products/${imagePath}.jpg`
  }
}
