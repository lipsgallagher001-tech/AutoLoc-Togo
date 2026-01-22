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
   
   // ✅ TOUJOURS
   const supabase = createClient(url, anonKey)
   ```

3. **Désactiver Row Level Security**
   ```sql
   -- ❌ JAMAIS
   ALTER TABLE vehicles DISABLE ROW LEVEL SECURITY;
   
   -- ✅ TOUJOURS
   ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
   CREATE POLICY "policy_name" ON vehicles FOR SELECT USING (true);
   ```

4. **Oublier la validation des données**
   ```typescript
   // ❌ JAMAIS
   await supabase.from('bookings').insert(req.body)
   
   // ✅ TOUJOURS
   const validated = BookingSchema.parse(req.body)
   await supabase.from('bookings').insert(validated)
   ```

5. **Utiliser 'use client' partout**
   ```typescript
   // ❌ JAMAIS (sauf si nécessaire)
   'use client'
   export default function Page() {}
   
   // ✅ TOUJOURS (Server Component par défaut)
   export default async function Page() {}
   ```

6. **Fetch côté client au lieu de Server Component**
   ```typescript
   // ❌ JAMAIS
   'use client'
   const [data, setData] = useState([])
   useEffect(() => { fetch('/api/data') }, [])
   
   // ✅ TOUJOURS
   const data = await fetchData() // Server Component
   ```

7. **Images non optimisées**
   ```tsx
   // ❌ JAMAIS
   <img src="/vehicle.jpg" />
   
   // ✅ TOUJOURS
   <Image src="/vehicle.jpg" width={800} height={600} alt="Vehicle" />
   ```

8. **Pas de gestion d'erreurs**
   ```typescript
   // ❌ JAMAIS
   const data = await supabase.from('vehicles').select()
   return data
   
   // ✅ TOUJOURS
   const { data, error } = await supabase.from('vehicles').select()
   if (error) throw error
   return data
   ```

9. **SQL Injection via inputs utilisateur**
   ```typescript
   // ❌ JAMAIS
   const query = `SELECT * FROM vehicles WHERE id = ${userId}`
   
   // ✅ TOUJOURS
   const { data } = await supabase
     .from('vehicles')
     .select()
     .eq('id', userId) // Paramétré automatiquement
   ```

10. **Oublier les metadata SEO**
    ```typescript
    // ❌ JAMAIS
    export default function Page() {}
    
    // ✅ TOUJOURS
    export const metadata: Metadata = {
      title: 'Page Title',
      description: 'Page description'
    }
    export default function Page() {}
    ```

---

## 🎨 Styles et UI

### Tailwind CSS - Bonnes pratiques

```tsx
// ✅ CORRECT: Composition de classes
const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  danger: 'bg-red-600 hover:bg-red-700 text-white'
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={`rounded-lg px-4 py-2 font-medium transition-colors ${buttonVariants[variant]}`}>
      {children}
    </button>
  )
}

// ✅ CORRECT: Responsive design mobile-first
<div className="
  w-full              /* Mobile par défaut */
  sm:w-1/2            /* Tablette */
  lg:w-1/3            /* Desktop */
  xl:w-1/4            /* Large desktop */
">
  {/* Contenu */}
</div>

// ✅ CORRECT: Dark mode
<div className="
  bg-white text-gray-900
  dark:bg-gray-900 dark:text-white
">
  {/* Contenu */}
</div>

// ✅ CORRECT: États interactifs
<button className="
  bg-blue-600
  hover:bg-blue-700
  active:bg-blue-800
  focus:ring-2 focus:ring-blue-500 focus:outline-none
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all duration-200
">
  Cliquez-moi
</button>
```

---

## 📝 Formulaires et Validation

### Pattern recommandé avec React Hook Form + Zod

```typescript
// lib/utils/validators.ts
import { z } from 'zod'

export const BookingFormSchema = z.object({
  vehicleId: z.string().uuid('ID véhicule invalide'),
  fullName: z.string()
    .min(3, 'Le nom doit contenir au moins 3 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.string()
    .email('Email invalide'),
  phone: z.string()
    .regex(/^\+228\d{8}$/, 'Numéro de téléphone togolais invalide (+228XXXXXXXX)'),
  startDate: z.string()
    .datetime('Date de début invalide')
    .refine(date => new Date(date) > new Date(), 'La date doit être dans le futur'),
  endDate: z.string()
    .datetime('Date de fin invalide'),
  option: z.enum(['self-drive', 'with-driver'], {
    errorMap: () => ({ message: 'Option invalide' })
  }),
  paymentMethod: z.enum(['delivery', 'online'])
}).refine(data => new Date(data.endDate) > new Date(data.startDate), {
  message: 'La date de fin doit être après la date de début',
  path: ['endDate']
})

export type BookingFormData = z.infer<typeof BookingFormSchema>

// components/forms/BookingForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BookingFormSchema, type BookingFormData } from '@/lib/utils/validators'

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingFormSchema)
  })

  const onSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error('Erreur lors de la réservation')
      
      const result = await response.json()
      // Redirection vers page de succès
      window.location.href = `/booking/success?id=${result.bookingId}`
      
    } catch (error) {
      console.error(error)
      alert('Erreur lors de la réservation')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Nom complet
        </label>
        <input
          {...register('fullName')}
          type="text"
          id="fullName"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Autres champs... */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Réservation en cours...' : 'Confirmer la réservation'}
      </button>
    </form>
  )
}
```

---

## 🧪 Tests

### Tests unitaires avec Vitest

```typescript
// __tests__/utils/validators.test.ts
import { describe, it, expect } from 'vitest'
import { BookingFormSchema } from '@/lib/utils/validators'

describe('BookingFormSchema', () => {
  it('valide un booking correct', () => {
    const validBooking = {
      vehicleId: '123e4567-e89b-12d3-a456-426614174000',
      fullName: 'Jean Dupont',
      email: 'jean@example.com',
      phone: '+22890123456',
      startDate: new Date(Date.now() + 86400000).toISOString(), // Demain
      endDate: new Date(Date.now() + 172800000).toISOString(), // Après-demain
      option: 'self-drive' as const,
      paymentMethod: 'online' as const
    }

    const result = BookingFormSchema.safeParse(validBooking)
    expect(result.success).toBe(true)
  })

  it('rejette un email invalide', () => {
    const invalidBooking = {
      // ... autres champs valides
      email: 'email-invalide'
    }

    const result = BookingFormSchema.safeParse(invalidBooking)
    expect(result.success).toBe(false)
  })

  it('rejette une date de fin avant la date de début', () => {
    const invalidBooking = {
      // ... autres champs valides
      startDate: new Date(Date.now() + 172800000).toISOString(),
      endDate: new Date(Date.now() + 86400000).toISOString()
    }

    const result = BookingFormSchema.safeParse(invalidBooking)
    expect(result.success).toBe(false)
  })
})

// __tests__/components/VehicleCard.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VehicleCard } from '@/components/VehicleCard'

describe('VehicleCard', () => {
  const mockVehicle = {
    id: '1',
    name: 'Toyota Camry',
    category: 'Berline',
    pricePerDay: 25000,
    imageUrl: '/vehicles/camry.jpg',
    rating: 4.5,
    withDriver: true
  }

  it('affiche le nom du véhicule', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText('Toyota Camry')).toBeInTheDocument()
  })

  it('affiche le prix correct', () => {
    render(<VehicleCard vehicle={mockVehicle} />)
    expect(screen.getByText(/25\.000 FCFA/)).toBeInTheDocument()
  })
})
```

---

## 🔄 État Global avec Zustand

```typescript
// lib/store/booking-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BookingState {
  vehicleId: string | null
  startDate: string | null
  endDate: string | null
  option: 'self-drive' | 'with-driver' | null
  
  setVehicle: (id: string) => void
  setDates: (start: string, end: string) => void
  setOption: (option: 'self-drive' | 'with-driver') => void
  reset: () => void
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      vehicleId: null,
      startDate: null,
      endDate: null,
      option: null,
      
      setVehicle: (id) => set({ vehicleId: id }),
      setDates: (start, end) => set({ startDate: start, endDate: end }),
      setOption: (option) => set({ option }),
      reset: () => set({
        vehicleId: null,
        startDate: null,
        endDate: null,
        option: null
      })
    }),
    {
      name: 'booking-storage' // Clé localStorage
    }
  )
)

// Utilisation dans un composant
'use client'

import { useBookingStore } from '@/lib/store/booking-store'

export function BookingWidget() {
  const { vehicleId, setVehicle } = useBookingStore()
  
  return (
    <div>
      <button onClick={() => setVehicle('vehicle-123')}>
        Réserver ce véhicule
      </button>
      {vehicleId && <p>Véhicule sélectionné: {vehicleId}</p>}
    </div>
  )
}
```

---

## 🌐 Internationalisation (i18n)

```typescript
// app/[lang]/layout.tsx
import { i18n } from '@/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}

// lib/dictionaries.ts
const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default)
}

export const getDictionary = async (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries]()
}

// dictionaries/fr.json
{
  "home": {
    "title": "Louez votre véhicule premium",
    "subtitle": "La solution de location de confiance au Togo",
    "cta": "Voir la flotte"
  },
  "booking": {
    "title": "Réservation",
    "submit": "Confirmer la réservation"
  }
}

// app/[lang]/page.tsx
import { getDictionary } from '@/lib/dictionaries'

export default async function HomePage({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)
  
  return (
    <div>
      <h1>{dict.home.title}</h1>
      <p>{dict.home.subtitle}</p>
    </div>
  )
}
```

---

## 📊 Monitoring et Analytics

```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

// Utilisation
trackEvent('booking_started', {
  vehicle_id: vehicleId,
  vehicle_category: category
})

trackEvent('booking_completed', {
  booking_id: bookingId,
  total_price: totalPrice,
  duration_days: days
})

// lib/error-tracking.ts
import * as Sentry from '@sentry/nextjs'

export const trackError = (error: Error, context?: Record<string, any>) => {
  console.error(error)
  
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error, {
      extra: context
    })
  }
}
```

---

## 🚀 Déploiement et CI/CD

### Vercel (recommandé pour Next.js)

```bash
# .env.production
NEXT_PUBLIC_SUPABASE_URL=https://prod.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx (Variable Vercel)

STRIPE_SECRET_KEY=sk_live_xxx (Variable Vercel)
STRIPE_WEBHOOK_SECRET=whsec_xxx (Variable Vercel)
```

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run TypeScript check
        run: npm run type-check
        
      - name: Run linter
        run: npm run lint
        
      - name: Run tests
        run: npm run test
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
```

---

## 📦 Scripts package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "format": "prettier --write \"**/*.{ts,tsx,json,md}\"",
    "prepare": "husky install",
    "db:generate-types": "supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.types.ts",
    "db:push": "supabase db push",
    "db:reset": "supabase db reset"
  }
}
```

---

## 🎓 Ressources complémentaires

### Documentation essentielle (2026)
- Next.js 15: https://nextjs.org/docs
- Supabase: https://supabase.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React 19: https://react.dev
- Zod: https://zod.dev
- React Hook Form: https://react-hook-form.com

### Outils de développement
- Supabase CLI: https://supabase.com/docs/guides/cli
- Vercel CLI: https://vercel.com/docs/cli
- ESLint: https://eslint.org/docs/latest
- Prettier: https://prettier.io/docs

### Communautés et support
- Next.js Discord: https://nextjs.org/discord
- Supabase Discord: https://discord.supabase.com
- TypeScript Community: https://discord.gg/typescript

---

## 📞 Support et Contact

### En cas de blocage

1. **Consulter la documentation officielle** (liens ci-dessus)
2. **Vérifier cette checklist** de rules steering
3. **Analyser les erreurs** dans la console
4. **Chercher sur GitHub Issues** du framework concerné
5. **Poser une question** sur Discord/Stack Overflow

---

## 🎯 Conclusion

Ce document de **Rules Steering** est un guide complet pour garantir que **Kiro AI IDE** :

✅ **Produit du code de qualité production**  
✅ **Respecte les standards 2026**  
✅ **Consulte systématiquement la documentation**  
✅ **Évite les erreurs critiques**  
✅ **Optimise performance et sécurité**  
✅ **Maintient la cohérence architecturale**

### Rappel des principes CORE

**C - Consulter** la documentation avant toute action  
**O - Optimiser** pour la performance et le SEO  
**R - Respecter** les standards TypeScript et Next.js  
**E - Éviter** les 10 erreurs critiques listées

---

**Version:** 1.0  
**Dernière mise à jour:** 22 janvier 2026  
**Projet:** AutoLoc Togo  
**Auteur:** Documentation technique AutoLoc  
**Statut:** Document vivant - À mettre à jour régulièrement

---

## ⚡ Quick Reference

```typescript
// Template de composant Server
export default async function Page() {
  const data = await fetchData()
  return <Component data={data} />
}

// Template de composant Client
'use client'
export function Interactive() {
  const [state, setState] = useState()
  return <div onClick={() => setState(x)} />
}

// Template API Route
import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  const validated = Schema.parse(await req.json())
  const result = await processData(validated)
  return NextResponse.json(result)
}

// Template Supabase Query
const { data, error } = await supabase
  .from('table')
  .select('*')
  .eq('column', value)
if (error) throw error
return data
```

---

**🚀 Bon développement avec Kiro AI IDE !**