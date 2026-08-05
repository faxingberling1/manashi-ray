import sys
import subprocess
try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'pypdf'])
    from pypdf import PdfReader, PdfWriter

input_path = r'C:\Users\Alex Murphy\.gemini\antigravity-ide\brain\8d354533-e22a-4c13-af1f-5ddb92f067fd\media__1785967100740.pdf'
output_path = r'c:\Users\Alex Murphy\Downloads\manashi-ray\public\Publications\RC-31_Newsletter_June_2026.pdf'

reader = PdfReader(input_path)
writer = PdfWriter()

writer.add_page(reader.pages[40])
writer.add_page(reader.pages[41])

with open(output_path, 'wb') as fp:
    writer.write(fp)
print('Extracted successfully.')
