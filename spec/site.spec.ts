import { test, expect } from '@playwright/test';

const BASE = '/VisualBoost';

async function goto(page: any, path: string) {
  await page.goto(`${BASE}${path}`);
  await page.waitForLoadState('networkidle');
}

// Homepage
test.describe('Homepage', () => {
  test('carga con título correcto', async ({ page }) => {
    await goto(page, '/');
    await expect(page).toHaveTitle(/VisualBoost/);
  });

  test('muestra el logo y la navegación', async ({ page }) => {
    await goto(page, '/');
    await expect(page.getByRole('link', { name: 'Portafolio' }).first()).toBeVisible();
  });

  test('muestra la sección de servicios', async ({ page }) => {
    await goto(page, '/');
    const section = page.locator('#servicios');
    await expect(section).toBeVisible();
    await expect(section.locator('h3').filter({ hasText: 'Fotografía de Productos' })).toBeVisible();
    await expect(section.locator('h3').filter({ hasText: 'Fotografía Lifestyle' })).toBeVisible();
    await expect(section.locator('h3').filter({ hasText: 'Reels' })).toBeVisible();
    await expect(section.locator('h3').filter({ hasText: 'Edición para Redes Sociales' })).toBeVisible();
  });

  test('muestra los tres planes de precios', async ({ page }) => {
    await goto(page, '/');
    await expect(page.locator('h3').filter({ hasText: 'Plan Básico' }).first()).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'Plan Estándar' }).first()).toBeVisible();
    await expect(page.locator('h3').filter({ hasText: 'Plan Premium' }).first()).toBeVisible();
  });

  test('muestra la sección FAQ', async ({ page }) => {
    await goto(page, '/');
    const faqSection = page.locator('#faq');
    await expect(faqSection.getByText('¿Cuál es el plan ideal para mi negocio?')).toBeVisible();
  });

  test('expande una pregunta del FAQ al hacer clic', async ({ page }) => {
    await goto(page, '/');
    await page.locator('#faq').getByText('¿Cuál es el plan ideal para mi negocio?').click();
    await expect(page.getByText(/Plan Básico es excelente/).first()).toBeVisible();
  });

  test('colapsa una pregunta del FAQ al hacer clic de nuevo', async ({ page }) => {
    await goto(page, '/');
    const question = page.locator('#faq').getByText('¿Cuál es el plan ideal para mi negocio?');
    await question.click();
    await expect(page.getByText(/Plan Básico es excelente/).first()).toBeVisible();
    await question.click();
    await expect(page.getByText(/Plan Básico es excelente/).first()).not.toBeVisible();
  });

  test('muestra testimonios de clientes', async ({ page }) => {
    await goto(page, '/');
    await expect(page.getByText('Carolina Mendoza')).toBeVisible();
  });
});

// Navegación
test.describe('Navegación', () => {
  test('navega a la página de portafolio', async ({ page }) => {
    await goto(page, '/');
    await page.getByRole('link', { name: 'Portafolio' }).first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/portafolio/);
    await expect(page.getByText('Nuestro Portafolio')).toBeVisible();
  });

  test('navega a Quiénes Somos', async ({ page }) => {
    await goto(page, '/');
    await page.getByRole('link', { name: /Qui.nes Somos/i }).first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/quienes-somos/);
  });

  test('navega a la página de contacto', async ({ page }) => {
    await goto(page, '/');
    await page.getByRole('link', { name: /Contacto|Contáctanos/i }).first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/contacto/);
  });
});

// Portfolio
test.describe('Portfolio', () => {
  test('muestra el título del portafolio', async ({ page }) => {
    await goto(page, '/portafolio');
    await expect(page.getByRole('heading', { name: 'Nuestro Portafolio' })).toBeVisible();
  });

  test('muestra los botones de filtro', async ({ page }) => {
    await goto(page, '/portafolio');
    await expect(page.getByRole('button', { name: 'Todos' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'E-commerce & Marketplace' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Negocios Locales' })).toBeVisible();
  });

  test('filtra por E-commerce', async ({ page }) => {
    await goto(page, '/portafolio');
    await page.getByRole('button', { name: 'E-commerce & Marketplace' }).click();
    await expect(page.getByText('Aumento de ventas 240%')).toBeVisible();
  });

  test('filtra por Negocios Locales y oculta E-commerce', async ({ page }) => {
    await goto(page, '/portafolio');
    await page.getByRole('button', { name: 'Negocios Locales' }).click();
    await expect(page.getByText('Cola de Mono - Navideño Vol. 1')).toBeVisible();
    await expect(page.getByText('Aumento de ventas 240%')).not.toBeVisible();
  });

  test('vuelve a mostrar todos al hacer clic en Todos', async ({ page }) => {
    await goto(page, '/portafolio');
    await page.getByRole('button', { name: 'E-commerce & Marketplace' }).click();
    await page.getByRole('button', { name: 'Todos' }).click();
    await expect(page.getByText('Aumento de ventas 240%')).toBeVisible();
    await expect(page.getByText('Cola de Mono - Navideño Vol. 1')).toBeVisible();
  });
});

// Formulario de contacto
test.describe('Formulario de contacto', () => {
  test('muestra todos los campos', async ({ page }) => {
    await goto(page, '/contacto');
    await expect(page.getByLabel('Nombre')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel(/WhatsApp/)).toBeVisible();
    await expect(page.getByLabel('Tipo de negocio')).toBeVisible();
    await expect(page.getByLabel(/proyecto/i)).toBeVisible();
  });

  test('muestra el botón de envío', async ({ page }) => {
    await goto(page, '/contacto');
    await expect(page.getByRole('button', { name: 'Enviar Consulta' })).toBeVisible();
  });

  test('acepta input en los campos', async ({ page }) => {
    await goto(page, '/contacto');
    await page.getByLabel('Nombre').fill('Ana García');
    await page.getByLabel('Email').fill('ana@ejemplo.com');
    await page.getByLabel(/WhatsApp/).fill('+56 9 1234 5678');
    await page.getByLabel('Tipo de negocio').fill('Cafetería');
    await expect(page.getByLabel('Nombre')).toHaveValue('Ana García');
    await expect(page.getByLabel('Email')).toHaveValue('ana@ejemplo.com');
  });

  test('muestra información de contacto', async ({ page }) => {
    await goto(page, '/contacto');
    await expect(page.getByText('contacto@visualboost.com')).toBeVisible();
  });
});

// Menú mobile
test.describe('Menú mobile', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('oculta la navegación desktop en mobile', async ({ page }) => {
    await goto(page, '/');
    const desktopNav = page.locator('.hidden.lg\\:flex');
    await expect(desktopNav).toBeHidden();
  });

  test('abre el menú mobile con el botón hamburguesa', async ({ page }) => {
    await goto(page, '/');
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await menuButton.click();
    await expect(page.getByRole('link', { name: 'Portafolio' }).last()).toBeVisible();
  });
});
