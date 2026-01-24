# 🔍 Guide de Vérification Rapide - AutoLoc Togo

## ✅ Checklist de Vérification

### 1. Le Serveur Fonctionne-t-il ?

**Commande :**
```bash
npm run dev
```

**Résultat Attendu :**
```
VITE v6.4.1  ready in 4631 ms
➜  Local:   http://localhost:3000/
➜  Network: http://192.168.1.90:3000/
```

✅ **Si vous voyez ce message, le serveur fonctionne !**

---

### 2. Ouvrir l'Application dans le Navigateur

1. Ouvrez votre navigateur (Chrome, Firefox, Edge)
2. Allez sur : **http://localhost:3000**
3. Vous devriez voir la page d'accueil AutoLoc

---

### 3. Vérifier la Console du Navigateur

**Comment ouvrir la console :**
- **Windows/Linux** : Appuyez sur `F12` ou `Ctrl+Shift+I`
- **Mac** : Appuyez sur `Cmd+Option+I`

**Ce que vous devriez voir :**
```
🚀 Application AutoLoc - Mode Debug
Current route: #/
```

**Ce que vous NE devriez PAS voir :**
- ❌ Erreurs en rouge
- ❌ "Failed to load resource"
- ❌ "Cannot find module"

---

### 4. Tester la Navigation

Cliquez sur les liens suivants et vérifiez que les pages se chargent :

- [ ] **Accueil** : http://localhost:3000/#/
- [ ] **Notre Flotte** : http://localhost:3000/#/fleet
- [ ] **À Propos** : http://localhost:3000/#/about
- [ ] **Contact** : http://localhost:3000/#/contact
- [ ] **Admin** : http://localhost:3000/#/admin

---

### 5. Vérifier les Styles

**Les éléments suivants devraient être stylisés :**

✅ **Header** :
- Logo AutoLoc visible
- Menu de navigation
- Bouton "Réserver" en bleu (#137fec)

✅ **Hero Section** :
- Image de fond
- Titre "Location de véhicules au Togo"
- Boutons stylisés

✅ **Cartes de véhicules** :
- Images des véhicules
- Prix affichés
- Boutons "Voir détails"

---

### 6. Vérifier le Mode Sombre

1. Ouvrez la console du navigateur (F12)
2. Tapez :
```javascript
document.documentElement.classList.toggle('dark')
```
3. Appuyez sur Entrée
4. Le thème devrait changer (clair ↔ sombre)

---

## 🐛 Problèmes Courants et Solutions

### Problème 1 : Page Blanche

**Symptômes :**
- La page est complètement blanche
- Aucun contenu visible

**Solutions :**
1. Ouvrez la console (F12)
2. Vérifiez les erreurs
3. Essayez de vider le cache :
   ```bash
   # Arrêter le serveur (Ctrl+C)
   rm -rf node_modules/.vite
   npm run dev
   ```

---

### Problème 2 : Styles Non Appliqués

**Symptômes :**
- Le contenu s'affiche mais sans styles
- Tout est en noir et blanc
- Pas de mise en page

**Solutions :**
1. Vérifiez que `styles.css` se charge :
   - Ouvrez DevTools (F12)
   - Onglet "Network"
   - Cherchez `styles.css`
   - Statut devrait être 200

2. Vérifiez la configuration Tailwind :
   ```bash
   # Vérifier que les fichiers existent
   ls tailwind.config.js
   ls postcss.config.js
   ```

---

### Problème 3 : Erreur "Cannot find module"

**Symptômes :**
- Erreur dans la console
- Message "Cannot find module './components/...'"

**Solutions :**
1. Vérifiez que tous les fichiers existent
2. Vérifiez les imports dans les fichiers
3. Redémarrez le serveur :
   ```bash
   # Ctrl+C pour arrêter
   npm run dev
   ```

---

### Problème 4 : Port 3000 Déjà Utilisé

**Symptômes :**
- Erreur "Port 3000 is already in use"

**Solutions :**
1. **Option 1** : Arrêter l'autre processus
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Option 2** : Utiliser un autre port
   - Modifier `vite.config.ts` :
   ```typescript
   server: {
     port: 3001, // Changer le port
   }
   ```

---

## 🎯 Test Complet

### Script de Test Automatique

Copiez-collez ce code dans la console du navigateur (F12) :

```javascript
// Test de diagnostic complet
console.clear();
console.log('🔍 Diagnostic AutoLoc Togo\n');

// Test 1: Root element
const root = document.getElementById('root');
console.log('✓ Root element:', root ? '✅ Trouvé' : '❌ Non trouvé');

// Test 2: React montage
const hasReactContent = root && root.children.length > 0;
console.log('✓ React monté:', hasReactContent ? '✅ Oui' : '❌ Non');

// Test 3: Styles Tailwind
const hasStyles = getComputedStyle(document.body).fontFamily.includes('Inter');
console.log('✓ Styles chargés:', hasStyles ? '✅ Oui' : '❌ Non');

// Test 4: Navigation
const header = document.querySelector('header');
console.log('✓ Header:', header ? '✅ Présent' : '❌ Absent');

// Test 5: Images
const images = document.querySelectorAll('img');
console.log('✓ Images:', images.length > 0 ? `✅ ${images.length} trouvées` : '❌ Aucune');

// Résumé
console.log('\n📊 Résumé:');
const allGood = root && hasReactContent && hasStyles && header;
console.log(allGood ? '✅ Tout fonctionne !' : '⚠️ Problèmes détectés');
```

---

## 📞 Besoin d'Aide ?

Si après toutes ces vérifications le problème persiste :

1. **Capturez les erreurs** :
   - Screenshot de la console (F12)
   - Screenshot de l'onglet Network
   - Copie des logs du serveur

2. **Informations système** :
   - Version de Node.js : `node --version`
   - Version de npm : `npm --version`
   - Système d'exploitation

3. **Fichiers à vérifier** :
   - `package.json`
   - `vite.config.ts`
   - `tailwind.config.js`
   - `index.html`

---

## ✅ Tout Fonctionne ?

Si tous les tests passent, félicitations ! 🎉

Votre application AutoLoc Togo est opérationnelle.

**Prochaines étapes :**
1. Tester toutes les pages
2. Vérifier les formulaires
3. Tester sur mobile (responsive)
4. Préparer le déploiement

---

**Dernière mise à jour** : 22 janvier 2026
