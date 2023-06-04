import pytesseract
from PIL import Image
from django.shortcuts import render
from django.template.defaultfilters import linebreaksbr

def ocr(request):
    if request.method == 'POST' and request.FILES['image']:
        # Retrieve the uploaded image from the request
        image = request.FILES['image']
        
        # Open the image using PIL (Python Imaging Library)
        img = Image.open(image)
        
        # Perform OCR using pytesseract
        extracted_text = pytesseract.image_to_string(img, lang='ben+eng')
        
        # Apply linebreaksbr filter to the extracted text
        formatted_text = linebreaksbr(extracted_text)
        
        # Pass the formatted text to the template for rendering
        return render(request, 'result.html', {'text': formatted_text})
    
    return render(request, 'index.html')
