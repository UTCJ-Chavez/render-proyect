import sys

def test_suma_basica():
    resultado = 2 + 2
    esperado = 4  # <--- CORREGIDO
    
    assert resultado == esperado, f"Error: Se esperaba {esperado} pero se obtuvo {resultado}"
    print("✅ Todas las pruebas pasaron correctamente.")

if __name__ == "__main__":
    try:
        test_suma_basica()
        sys.exit(0)
    except AssertionError as e:
        print(f"❌ {e}")
        sys.exit(1)
