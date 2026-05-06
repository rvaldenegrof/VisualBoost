#!/bin/bash

echo "🚀 VisualBoost - Setup Inicial"
echo "================================"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar Node.js
echo "📦 Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js no está instalado. Por favor instálalo desde https://nodejs.org${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js $(node -v) encontrado${NC}"

# 2. Verificar npm
echo ""
echo "📦 Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm no está instalado${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm $(npm -v) encontrado${NC}"

# 3. Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencias instaladas correctamente${NC}"
else
    echo -e "${RED}❌ Error al instalar dependencias${NC}"
    exit 1
fi

# 4. Crear .env.local
echo ""
echo "⚙️  Configurando variables de entorno..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo -e "${YELLOW}⚠️  Se creó .env.local - Por favor edítalo con tus datos${NC}"
else
    echo -e "${GREEN}✅ .env.local ya existe${NC}"
fi

# 5. Resumen
echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✅ Setup completado${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo "Próximos pasos:"
echo ""
echo "1️⃣  Edita .env.local con tu información:"
echo "   nano .env.local"
echo ""
echo "2️⃣  Edita tu contenido en src/data/services.ts"
echo ""
echo "3️⃣  Inicia el servidor de desarrollo:"
echo "   npm run dev"
echo ""
echo "4️⃣  Abre http://localhost:3000 en tu navegador"
echo ""
echo -e "${YELLOW}Para más ayuda, revisa PERSONALIZACION.md${NC}"
echo ""
