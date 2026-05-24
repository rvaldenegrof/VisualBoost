import { test, expect } from '@playwright/test';

// Homepage
test.describe('Homepage', () => {
  test('carga con título correcto', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/VisualBoost/);
  });

  test('muestra el logo y la navegación', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('VisualBoost')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Portafolio' }).first()).toBeVisible();
  });

  test('muestra la sección de servicios', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Fotografía de Productos')).toBeVisible();
    await expect(page.getByText('Fotografía Lifestyle')).toBeVisible();
    await expect(page.getByText('Reels & Contenido Corto')).toBeVisible();
    await expect(page.getByText('Edición para Redes Sociales')).toBeVisible();
  });

  test('muestra los tres planes de precios', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Plan Básico')).toBeVisible();
    await expect(page.getByText('Plan Estándar')).toBeVisible();
    await expect(page.getByText('Plan Premium')).toBeVisible();
    await expect(page.getByText('$120.000')).toBeVisible();
    await expect(page.getByText('$200.000')).toBeVisible();
    await expect(page.getByText('$350.000')).toBeVisible();
  });

  test('muestra la sección FAQ', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('¿Cuál es el plan ideal para mi negocio?')).toBeVisible();
    await expect(page.getByText('¿Cuánto tiempo tarda una sesión de contenido?')).toBeVisible();
  });

  test('expande una pregunta del FAQ al hacer clic', async ({ page }) => {
    await page.goto('/');
    await page.getByText('¿Cuál es el plan ideal para mi negocio?').click();
    await expect(page.getByText(/Plan Básico es excelente/)).toBeVisible();
  });

  test('colapsa una pregunta del FAQ al hacer clic de nuevo', async ({ page }) => {
    await page.goto('/');
    const question = page.getByText('¿Cuál es el plan ideal para mi negocio?');
    await question.click();
    await expect(page.getByText(/Plan Básico es excelente/)).toBeVisible();
    await question.click();
    await expect(page.getByText(/Plan Básico es excelente/)).not.toBeVisible();
  });

  test('muestra testimonios de clientes', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Carolina Mendoza')).toBeVisible();
  });
});

// Navegación
test.describe('Navegación', () => {
  test('navega a la página de portafolio', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Portafolio' }).first().click();
    await expect(page).toHaveURL(/portafolio/);
    await expect(page.getByText('Nuestro Portafolio')).toBeVisible();
  });

  test('navega a Quiénes Somos', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Qui.nes Somos/i }).first().click();
    await expect(page).toHaveURL(/quienes-somos/);
  });

  test('navega a la página de contacto', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Contacto|Contáctanos/i }).first().click();
    await expect(page).toHaveURL(/contacto/);
  });

  test('el logo lleva a la homepage', async ({ page }) => {
    await page.goto('/portafolio');
    await page.getByRole('link').filter({ has: page.getByText('VisualBoost') }).click();
    await expect(page).toHaveURL(/\/$|\/#/);
  });
});

// Portfolio
test.describe('Portfolio', () => {
  test('muestra el título del portafolio', async ({ page }) => {
    await page.goto('/portafolio');
    await expect(page.getByText('Nuestro Portafolio')).toBeVisible();
  });

  test('muestra los botones de filtro', async ({ page }) => {
    await page.goto('/portafolio');
    await expect(page.getByRole('button', { name: 'Todos' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'E-commerce & Marketplace' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Negocios Locales' })).toBeVisible();
  });

  test('filtra por E-commerce', async ({ page }) => {
    await page.goto('/portafolio');
    await page.getByRole('button', { name: 'E-commerce & Marketplace' }).click();
    await expect(page.getByText('Aumento de ventas 240%')).toBeVisible();
  });

  test('filtra por Negocios Locales', async ({ page }) => {
    await page.goto('/portafolio');
    await page.getByRole('button', { name: 'Negocios Locales' }).click();
    await expect(page.getByText('Cola de Mono - Navideño Vol. 1')).toBeVisible();
  });

  test('vuelve a mostrar todos al hacer clic en Todos', async ({ page }) => {
    await page.goto('/portafolio');
    await page.getByRole('button', { name: 'E-commerce & Marketplace' }).click();
    await page.getByRole('button', { name: 'Todos' }).click();
    await expect(page.getByText('Aumento de ventas 240%')).toBeVisible();
    await expect(page.getByText('Cola de Mono - Navideño Vol. 1')).toBeVisible();
  });
});

// Formulario de contacto
test.describe('Formulario de contacto', () => {
  test('muestra todos los campos', async ({ page }) => {
    await page.goto('/contacto');
    await expect(page.getByLabel('Nombre')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel(/WhatsApp/)).toBeVisible();
    await expect(page.getByLabel('Tipo de negocio')).toBeVisible();
    await expect(page.getByLabel(/proyecto/i)).toBeVisible();
  });

  test('muestra el botón de envío', async ({ page }) => {
    await page.goto('/contacto');
    await expect(page.getByRole('button', { name: 'Enviar Consulta' })).toBeVisible();
  });

  test('el botón está habilitado cuando hay datos', async ({ page }) => {
    await page.goto('/contacto');
    await page.getByLabel('Nombre').fill('Ana García');
    await page.getByLabel('Email').fill('ana@ejemplo.com');
    await expect(page.getByRole('button', { name: 'Enviar Consulta' })).toBeEnabled();
  });

  test('acepta input en todos los campos', async ({ page }) => {
    await page.goto('/contacto');
    await page.getByLabel('Nombre').fill('Ana García');
    await page.getByLabel('Email').fill('ana@ejemplo.com');
    await page.getByLabel(/WhatsApp/).fill('+56 9 1234 5678');
    await page.getByLabel('Tipo de negocio').fill('Cafetería');
    await expect(page.getByLabel('Nombre')).toHaveValue('Ana García');
    await expect(page.getByLabel('Email')).toHaveValue('ana@ejemplo.com');
  });

  test('muestra información de contacto', async ({ page }) => {
    await page.goto('/contacto');
    await expect(page.getByText('contacto@visualboost.com')).toBeVisible();
  });
});

// Menú mobile
test.describe('Menú mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('oculta la navegación desktop en mobile', async ({ page }) => {
    await page.goto('/');
    const desktopNav = page.locator('.hidden.lg\\:flex');
    await expect(desktopNav).toBeHidden();
  });

  test('abre el menú mobile con el botón hamburguesa', async ({ page }) => {
    await page.goto('/');
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await menuButton.click();
    await expect(page.getByRole('link', { name: 'Portafolio' }).last()).toBeVisible();
  });
});
