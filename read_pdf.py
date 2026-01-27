
import re

def extract_strings(file_path):
    with open(file_path, "rb") as f:
        content = f.read()
    # Find sequences of printable characters
    strings = re.findall(rb"[\x20-\x7E]{4,}", content)
    for s in strings:
        try:
            print(s.decode("ascii"))
        except:
            pass

extract_strings(r"c:\laragon\www\Legalis-Pro-Nestor-main\public\assets\FORTALEZAS NUEVO.pdf")
