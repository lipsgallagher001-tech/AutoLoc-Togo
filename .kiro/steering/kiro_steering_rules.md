# Rules Steering - Projet AutoLoc Togo
## Guide de développement pour Kiro AI IDE

**Version:** 1.0  
**Date:** 20 janvier 2026  
**Projet:** AutoLoc Togo - Plateforme de location de véhicules premium  
**Stack:** Next.js 15 + Supabase + TypeScript + Tailwind CSS

---

## 📋 Table des matières

1. [Principes fondamentaux](#principes-fondamentaux)
2. [Documentation de référence](#documentation-de-référence)
3. [Architecture du projet](#architecture-du-projet)
4. [Règles de développement](#règles-de-développement)
5. [Standards de code](#standards-de-code)
6. [Gestion des erreurs](#gestion-des-erreurs)
7. [Sécurité](#sécurité)
8. [Performance](#performance)
9. [Checklist avant modification](#checklist-avant-modification)

---

## 🎯 Principes fondamentaux

### Philosophie de développement

**AVANT toute création, modification ou suppression de code, Kiro DOIT :**

1. ✅ **CONSULTER** la documentation officielle du framework/outil concerné
2. ✅ **ANALYSER** le contexte et l'architecture existante
3. ✅ **VÉRIFIER** la compatibilité avec Next.js 15 et Supabase
4. ✅ **VALIDER** les normes TypeScript strictes
5. ✅ **TESTER** mentalement la logique avant implémentation
6. ✅ **DOCUMENTER** le code avec des commentaires clairs

### Hiérarchie de priorités

```
1. SÉCURITÉ (authentification, données sensibles)
2. PERFORMANCE (SEO, Core Web Vitals)
3. EXPÉRIENCE UTILISATEUR (UX/UI, accessibilité)
4. MAINTENABILITÉ (code propre, documenté)
5. ÉVOLUTIVITÉ (architecture scalable)
```

---

## 📚 Documentation de référence

### OBLIGATOIRE : Consulter AVANT toute implémentation

#### Next.js 15 (Framework principal)
- **Documentation officielle:** https://nextjs.org/docs
- **App Router:** https://nextjs.org/docs/app
- **API Routes:** https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Server Components:** https://nextjs.org/docs/app/building-your-application/rendering/server-components
- **Metadata API:** https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- **Image Optimization:** https://nextjs.org/docs/app/api-reference/components/image

#### Supabase (Backend as a Service)
- **Documentation officielle:** https://supabase.com/docs
- **Auth:** https://supabase.com/docs/guides/auth
- **Database:** https://supabase.com/docs/guides/database
- **Storage:** https://supabase.com/docs/guides/storage
- **Realtime:** https://supabase.com/docs/guides/realtime
- **Row Level Security:** https://supabase.com/docs/guides/auth/row-level-security

#### TypeScript 5.8+
- **Documentation officielle:** https://www.typescriptlang.org/docs/
- **Handbook:** https://www.typescriptlang.org/docs/handbook/intro.html
- **Type Narrowing:** https://www.typescriptlang.org/docs/handbook/2/narrowing.html
- **Utility Types:** https://www.typescriptlang.org/docs/handbook/utility-types.html

#### Tailwind CSS 3+
- **Documentation officielle:** https://tailwindcss.com/docs
- **Configuration:** https://tailwindcss.com/docs/configuration
- **Dark Mode:** https://tailwindcss.com/docs/dark-mode
- **Responsive Design:** https://tailwindcss.com/docs/responsive-design

#### React 19
- **Documentation officielle:** https://react.dev
- **Hooks:** https://react.dev/reference/react/hooks
- **Server Components:** https://react.dev/reference/rsc/server-components
- **useActionState:** https://react.dev/reference/react/useActionState

#### Bootstrap 5 (si utilisé)
- **Documentation officielle:** https://getbootstrap.com/docs/5.3
- **Components:** https://getbootstrap.com/docs/5.3/components
- **Utilities:** https://getbootstrap.com/docs/5.3/utilities

---

## 🏗️ Architecture du projet

### Structure des dossiers (Next.js 15 App Router)

```
autoloc-togo/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── vehicles/
│   │   │   ├── bookings/
│   │   │   ├── customers/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (main)/
│   │   ├── page.tsx               # Page d'accueil
│   │   ├── fleet/
│   │   │   └── page.tsx          # Catalogue véhicules
│   │   ├── vehicle/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Détails véhicule
│   │   ├── booking/
│   │   │   ├── page.tsx          # Formulaire réservation
│   │   │   └── success/
│   │   │       └── page.tsx      # Confirmation
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   ├── vehicles/
│   │   │   └── route.ts
│   │   ├── bookings/
│   │   │   └── route.ts
│   │   ├── payments/
│   │   │   └── route.ts
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts
│   ├── layout.tsx                # Root layout
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── forms/
│   │   ├── BookingForm.tsx
│   │   └── ContactForm.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── FeaturedVehicles.tsx
│       └── WhyChooseUs.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Client Supabase
│   │   ├── server.ts             # Server Supabase
│   │   └── middleware.ts
│   ├── utils/
│   │   ├── validators.ts         # Schémas Zod
│   │   ├── formatters.ts
│   │   └── helpers.ts
│   └── constants.ts
├── types/
│   ├── database.types.ts         # Types Supabase auto-générés
│   ├── models.ts                 # Types métier
│   └── api.ts                    # Types API
├── hooks/
│   ├── useAuth.ts
│   ├── useVehicles.ts
│   └── useBooking.ts
├── middleware.ts                 # Middleware Next.js
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── public/
│   └── images/
├── .env.local
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Règles de développement

### 1. Next.js 15 - App Router

#### ✅ À FAIRE

```typescript
// ✅ CORRECT: Server Component par défaut
// app/page.tsx
import { supabase } from '@/lib/supabase/server'

export default async function HomePage() {
  const { data: vehicles } = await supabase
    .from('vehicles')
    .select('*')
    .limit(6)

  return <FeaturedVehicles vehicles={vehicles} />
}

// ✅ CORRECT: Client Component quand nécessaire
// components/ui/Button.tsx
'use client'

import { useState } from 'react'

export function Button({ onClick, children }: ButtonProps) {
  const [loading, setLoading] = useState(false)
  // ... logique interactive
}

// ✅ CORRECT: Metadata export
// app/fleet/page.tsx
export const metadata: Metadata = {
  title: 'Notre Flotte - AutoLoc Togo',
  description: 'Découvrez notre flotte de véhicules premium...'
}

// ✅ CORRECT: API Route avec typage
// app/api/bookings/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { BookingSchema } from '@/lib/utils/validators'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = BookingSchema.parse(body)
    
    // ... logique métier
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    )
  }
}
```

#### ❌ À ÉVITER

```typescript
// ❌ INCORRECT: 'use client' sans raison
'use client'

export default function StaticPage() {
  return <div>Pas d'interactivité nécessaire</div>
}

// ❌ INCORRECT: Fetch côté client quand Server Component possible
'use client'

import { useEffect, useState } from 'react'

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState([])
  
  useEffect(() => {
    fetch('/api/vehicles')
      .then(res => res.json())
      .then(setVehicles)
  }, [])
  
  return <div>{/* ... */}</div>
}

// ❌ INCORRECT: Pages Router syntax (ancien)
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  // NE PLUS UTILISER avec App Router
}
```

### 2. Supabase - Base de données et Auth

#### ✅ À FAIRE

```typescript
// ✅ CORRECT: Client Supabase serveur
// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}

// ✅ CORRECT: Row Level Security activé
-- supabase/migrations/001_vehicles.sql
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price_per_day DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS activé
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- Politique: Tout le monde peut lire
CREATE POLICY "Vehicles are viewable by everyone"
  ON vehicles FOR SELECT
  USING (true);

-- Politique: Seuls les admins peuvent modifier
CREATE POLICY "Only admins can modify vehicles"
  ON vehicles FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');

// ✅ CORRECT: Typage automatique Supabase
// types/database.types.ts (généré automatiquement)
export type Database = {
  public: {
    Tables: {
      vehicles: {
        Row: {
          id: string
          name: string
          category: string
          price_per_day: number
        }
        Insert: {
          id?: string
          name: string
          category: string
          price_per_day: number
        }
        Update: {
          id?: string
          name?: string
          category?: string
          price_per_day?: number
        }
      }
    }
  }
}

// ✅ CORRECT: Authentification sécurisée
// app/api/auth/callback/route.ts
import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
```

#### ❌ À ÉVITER

```typescript
// ❌ INCORRECT: RLS désactivé (faille de sécurité)
ALTER TABLE vehicles DISABLE ROW LEVEL SECURITY;

// ❌ INCORRECT: Clés API exposées côté client
const supabase = createClient(
  'https://xxxxx.supabase.co', // OK
  'service_role_secret_key'     // ❌ DANGER! Clé service côté client
)

// ❌ INCORRECT: Requêtes SQL brutes non paramétrées
const { data } = await supabase
  .rpc('get_vehicle', { vehicle_id: userInput }) // ❌ Injection SQL possible
```

### 3. TypeScript - Typage strict

#### ✅ À FAIRE

```typescript
// ✅ CORRECT: Interfaces explicites
interface Vehicle {
  id: string
  name: string
  category: CarCategory
  transmission: Transmission
  seats: number
  pricePerDay: number
  imageUrl: string
  rating: number
  withDriver: boolean
  description?: string
  isPopular?: boolean
}

// ✅ CORRECT: Enums pour valeurs fixes
enum CarCategory {
  BERLINE = 'Berline',
  SUV = 'SUV',
  FOUR_BY_FOUR = '4x4',
  MINIBUS = 'Minibus',
  COMPACT_SUV = 'Compact SUV'
}

// ✅ CORRECT: Validation avec Zod
import { z } from 'zod'

export const BookingSchema = z.object({
  vehicleId: z.string().uuid(),
  fullName: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+228\d{8}$/),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  option: z.enum(['self-drive', 'with-driver']),
  paymentMethod: z.enum(['delivery', 'online'])
})

export type BookingInput = z.infer<typeof BookingSchema>

// ✅ CORRECT: Type guards
function isVehicle(obj: unknown): obj is Vehicle {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj &&
    'pricePerDay' in obj
  )
}

// ✅ CORRECT: Utility types
type PartialVehicle = Partial<Vehicle>
type VehicleKeys = keyof Vehicle
type VehicleWithoutId = Omit<Vehicle, 'id'>
```

#### ❌ À ÉVITER

```typescript
// ❌ INCORRECT: any partout
function fetchVehicle(id: any): any {
  return fetch(`/api/vehicles/${id}`).then((res: any) => res.json())
}

// ❌ INCORRECT: Types manquants
const vehicles = [] // Type: never[]
vehicles.push({ name: 'Toyota' }) // Erreur!

// ❌ INCORRECT: Assertions de type dangereuses
const data = response.data as Vehicle // ❌ Pas de validation runtime
```

### 4. Tailwind CSS - Styling

#### ✅ À FAIRE

```tsx
// ✅ CORRECT: Classes utilitaires Tailwind
export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <img
        src={vehicle.imageUrl}
        alt={vehicle.name}
        className="h-48 w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {vehicle.name}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {vehicle.category}
      </p>
    </div>
  )
}

// ✅ CORRECT: Responsive design
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {vehicles.map(vehicle => (
    <VehicleCard key={vehicle.id} vehicle={vehicle} />
  ))}
</div>

// ✅ CORRECT: Dark mode
<button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
  Réserver
</button>
```

#### ❌ À ÉVITER

```tsx
// ❌ INCORRECT: Inline styles au lieu de Tailwind
<div style={{ padding: '16px', backgroundColor: 'white' }}>
  {/* ... */}
</div>

// ❌ INCORRECT: Classes CSS custom inutiles
<div className="my-custom-card">
  {/* Utiliser Tailwind directement */}
</div>
```

---

## 📏 Standards de code

### Conventions de nommage

```typescript
// ✅ PascalCase pour composants/types
export function VehicleCard() {}
export interface Vehicle {}
export type BookingStatus = 'pending' | 'confirmed'

// ✅ camelCase pour variables/fonctions
const vehicleCount = 10
function calculateTotalPrice() {}

// ✅ UPPERCASE pour constantes
const API_URL = process.env.NEXT_PUBLIC_API_URL
const MAX_UPLOAD_SIZE = 5 * 1024 * 1024

// ✅ kebab-case pour fichiers
vehicle-card.tsx
booking-form.tsx
```

### Formatage du code

```typescript
// ✅ CORRECT: Imports organisés
// 1. React/Next
import { useState } from 'react'
import Image from 'next/image'

// 2. Librairies externes
import { z } from 'zod'

// 3. Composants internes
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

// 4. Types
import type { Vehicle } from '@/types/models'

// 5. Utils
import { formatPrice } from '@/lib/utils/formatters'

// ✅ CORRECT: Déstructuration
const { name, category, pricePerDay } = vehicle

// ✅ CORRECT: Arrow functions pour composants
export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return <div>{/* ... */}</div>
}

// ✅ CORRECT: Early returns
function getVehicleStatus(vehicle: Vehicle) {
  if (!vehicle.isAvailable) return 'unavailable'
  if (vehicle.withDriver) return 'with-driver'
  return 'self-drive'
}
```

### Documentation du code

```typescript
/**
 * Calcule le prix total d'une réservation
 * 
 * @param startDate - Date de début de location
 * @param endDate - Date de fin de location
 * @param pricePerDay - Prix journalier du véhicule
 * @param withDriver - Option chauffeur (ajoute 15,000 FCFA/jour)
 * @returns Prix total en FCFA
 * 
 * @example
 * calculateTotalPrice('2026-01-20', '2026-01-25', 25000, true)
 * // Returns: 200000 (5 jours × (25000 + 15000))
 */
export function calculateTotalPrice(
  startDate: string,
  endDate: string,
  pricePerDay: number,
  withDriver: boolean
): number {
  const days = differenceInDays(new Date(endDate), new Date(startDate))
  const driverCost = withDriver ? 15000 : 0
  return days * (pricePerDay + driverCost)
}
```

---

## 🛡️ Gestion des erreurs

### Pattern recommandé

```typescript
// ✅ CORRECT: Try-catch avec types d'erreur
import { ZodError } from 'zod'
import { PostgrestError } from '@supabase/supabase-js'

export async function createBooking(data: BookingInput) {
  try {
    // Validation
    const validated = BookingSchema.parse(data)
    
    // Création en base
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert(validated)
      .select()
      .single()
    
    if (error) throw error
    
    return { success: true, booking }
    
  } catch (error) {
    // Erreur de validation
    if (error instanceof ZodError) {
      return {
        success: false,
        error: 'Données invalides',
        details: error.errors
      }
    }
    
    // Erreur Supabase
    if (error && typeof error === 'object' && 'code' in error) {
      const pgError = error as PostgrestError
      return {
        success: false,
        error: 'Erreur base de données',
        code: pgError.code
      }
    }
    
    // Erreur inconnue
    console.error('Unexpected error:', error)
    return {
      success: false,
      error: 'Erreur interne du serveur'
    }
  }
}

// ✅ CORRECT: Error boundaries pour React
// components/ErrorBoundary.tsx
'use client'

export function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Une erreur est survenue</h2>
        <button
          onClick={reset}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
```

---

## 🔐 Sécurité

### Checklist de sécurité

```typescript
// ✅ Variables d'environnement sécurisées
// .env.local (JAMAIS commité)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx // ❌ NE JAMAIS exposer côté client

STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

// ✅ Validation SYSTÉMATIQUE des entrées
export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Validation Zod
  const validated = BookingSchema.safeParse(body)
  if (!validated.success) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400 }
    )
  }
  
  // ... logique métier
}

// ✅ Authentification requise
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()
  
  // Protéger routes admin
  if (request.nextUrl.pathname.startsWith('/admin') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return res
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*']
}

// ✅ Sanitization des données
import DOMPurify from 'isomorphic-dompurify'

const sanitizedMessage = DOMPurify.sanitize(userMessage)

// ✅ Rate limiting
import { Ratelimit } from '@upstash/ratelimit'

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return NextResponse.json(
      { error: 'Trop de requêtes' },
      { status: 429 }
    )
  }
  
  // ... logique
}
```

---

## ⚡ Performance

### Optimisations obligatoires

```typescript
// ✅ Images optimisées avec next/image
import Image from 'next/image'

<Image
  src={vehicle.imageUrl}
  alt={vehicle.name}
  width={800}
  height={600}
  className="rounded-lg"
  priority={isAboveFold} // Pour images above the fold
  placeholder="blur"
  blurDataURL={vehicle.blurHash}
/>

// ✅ Lazy loading des composants
import dynamic from 'next/dynamic'

const AdminDashboard = dynamic(
  () => import('@/components/admin/Dashboard'),
  { loading: () => <LoadingSpinner /> }
)

// ✅ Metadata pour SEO
// app/fleet/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Flotte - Location de Voitures Premium | AutoLoc Togo',
  description: 'Découvrez notre large gamme de véhicules disponibles à la location...',
  openGraph: {
    title: 'Notre Flotte - AutoLoc Togo',
    description: 'Véhicules premium pour tous vos besoins',
    images: ['/og-fleet.jpg'],
  },
}

// ✅ Caching stratégique
export const revalidate = 3600 // Revalidate toutes les heures

export async function generateStaticParams() {
  const vehicles = await getVehicles()
  
  return vehicles.map((vehicle) => ({
    id: vehicle.id,
  }))
}

// ✅ Streaming et Suspense
import { Suspense } from 'react'

export default function VehiclesPage() {
  return (
    <div>
      <Suspense fallback={<VehiclesSkeleton />}>
        <VehiclesList />
      </Suspense>
    </div>
  )
}
```

---

## ✅ Checklist avant modification

### Avant de créer/modifier du code, Kiro DOIT vérifier :

#### 1. Documentation
- [ ] J'ai consulté la documentation officielle du framework/outil
- [ ] J'ai vérifié la compatibilité avec Next.js 15
- [ ] J'ai consulté les best practices Supabase
- [ ] J'ai vérifié les types TypeScript

#### 2. Architecture
- [ ] Le code respecte la structure de dossiers définie
- [ ] Le composant est au bon endroit (app/ vs components/)
- [ ] Le fichier suit les conventions de nommage
- [ ] Les imports sont organisés correctement

#### 3. Sécurité
- [ ] Les données utilisateur sont validées (Zod)
- [ ] Les routes sensibles sont protégées (middleware)
- [ ] Row Level Security est activé (Supabase)
- [ ] Aucune clé secrète n'est exposée côté client
- [ ] Les entrées sont sanitizées

#### 4. Performance
- [ ] Images optimisées avec next/image
- [ ] Composants lourds lazy loadés
- [ ] Metadata SEO ajoutée
- [ ] Caching stratégique implémenté
- [ ] Server Components utilisés par défaut

#### 5. Qualité du code
- [ ] TypeScript strict activé (pas de `any`)
- [ ] Code documenté avec JSDoc
- [ ] Gestion d'erreurs complète
- [ ] Tests unitaires (si applicable)
- [ ] Accessibilité respectée (ARIA, semantic HTML)

#### 6. UX/UI
- [ ] Responsive design (mobile-first)
- [ ] Dark mode supporté
- [ ] Loading states affichés
- [ ] Messages d'erreur clairs
- [ ] Animations fluides

---

## 🚨 Erreurs critiques à éviter

### ❌ Top 10 des erreurs INTERDITES

1. **Utiliser `any` en TypeScript**
   ```typescript
   // ❌ JAMAIS
   function processData(data: any) {}
   
   // ✅ TOUJOURS
   function processData(data: Vehicle) {}
   ```

2. **Exposer des clés secrètes côté client**
   ```typescript
   // ❌ JAMAIS
   const supabase = createClient(url, serviceRoleKey)
   
   // ✅ TO