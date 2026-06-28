---
section: blog
title: 'Filtres WooCommerce : Guide Complet'
author: Diane
tags:
- Tech
description: Guide complet sur les filtres et leur utilisation dans WooCommerce
pubDate: '2024-03-25'
imgUrl: ../../../assets/astro.jpeg
---

# Filtres WooCommerce : Personnaliser Ta Boutique Sans Tout Casser

Tu veux modifier le comportement de WooCommerce sans toucher au code source du plugin ? Les hooks et filtres sont tes meilleurs alliés. Et si tu veux que tes clients trouvent leurs produits en 2 clics, les filtres de produits cote front sont indispensables.

Ce guide couvre les deux : les filtres techniques (hooks PHP) et les filtres visuels (navigation a facettes pour tes clients).

## Partie 1 : Hooks et Filtres PHP

### C'est Quoi un Hook WooCommerce ?

Un hook, c'est un point d'ancrage dans le code de WooCommerce ou tu peux "accrocher" ta propre logique. Il en existe deux types :

- **Actions** : executent du code a un moment précis (afficher un message, envoyer un email, creer un log)
- **Filtres** : modifient une donnee avant qu'elle soit utilisée (changer un prix, reformater un texte, ajouter un champ)

**Analogie :** imagine WooCommerce comme une chaîne de montage. Les actions te permettent d'ajouter un poste de travail a un endroit précis. Les filtres te permettent de modifier la piece qui passe sur le tapis roulant.

**En chiffres :** WooCommerce contient plus de **750 hooks** (actions + filtres). Tu n'en utiliseras probablement que 20-30 pour un projet courant.

### Ou Mettre Ton Code ?

**Option 1 : functions.php du theme enfant** (simple, rapide)

```php
// wp-content/themes/mon-theme-enfant/functions.php
add_filter('woocommerce_sale_flash', 'modifier_badge_promo', 10, 3);
function modifier_badge_promo($html, $post, $product) {
    $pourcentage = round(
        (($product->get_regular_price() - $product->get_sale_price())
        / $product->get_regular_price()) * 100
    );
    return '<span class="onsale">-' . $pourcentage . '%</span>';
}
```

**Option 2 : Plugin custom** (recommande pour la maintenabilite)

```php
<?php
/**
 * Plugin Name: Mes Personnalisations WooCommerce
 * Description: Hooks et filtres custom pour ma boutique
 * Version: 1.0
 */

// Empecher l'acces direct
if (!defined('ABSPATH')) exit;

// Tes hooks ici
```

**Option 3 : Code Snippets** (plugin qui permet d'ajouter du PHP depuis l'admin WordPress, sans FTP)

**Conseil :** ne mets jamais de hooks directement dans le `functions.php` du theme parent. A la prochaine mise a jour, tout disparait.

### Les 15 Hooks les Plus Utiles

#### Hooks de la Page Produit

**1. `woocommerce_before_single_product`** -- Ajouter du contenu avant la fiche produit :

```php
add_action('woocommerce_before_single_product', 'ajouter_bandeau_livraison');
function ajouter_bandeau_livraison() {
    echo '<div class="bandeau-info">';
    echo 'Livraison gratuite des 50 EUR d\'achat !';
    echo '</div>';
}
```

**2. `woocommerce_single_product_summary`** -- Modifier l'ordre des elements de la fiche produit :

```php
// Retirer le prix de sa position par defaut
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 10);
// Le remettre apres la description courte
add_action('woocommerce_single_product_summary', 'woocommerce_template_single_price', 25);
```

**3. `woocommerce_product_get_price` (filtre)** -- Modifier le prix dynamiquement :

```php
add_filter('woocommerce_product_get_price', 'prix_selon_role', 10, 2);
function prix_selon_role($price, $product) {
    if (current_user_can('wholesale_customer')) {
        return $price * 0.8; // -20% pour les grossistes
    }
    return $price;
}
```

#### Hooks du Panier

**4. `woocommerce_before_cart`** -- Contenu avant le panier :

```php
add_action('woocommerce_before_cart', 'message_livraison_gratuite');
function message_livraison_gratuite() {
    $total = WC()->cart->get_subtotal();
    $seuil = 50;
    if ($total < $seuil) {
        $reste = $seuil - $total;
        echo '<div class="notice">';
        echo 'Plus que ' . wc_price($reste) . ' pour la livraison gratuite !';
        echo '</div>';
    }
}
```

**5. `woocommerce_cart_calculate_fees`** -- Ajouter des frais au panier :

```php
add_action('woocommerce_cart_calculate_fees', 'frais_emballage_cadeau');
function frais_emballage_cadeau($cart) {
    if (WC()->session->get('emballage_cadeau')) {
        $cart->add_fee('Emballage cadeau', 3.50, true);
    }
}
```

**6. `woocommerce_add_to_cart_validation` (filtre)** -- Valider avant l'ajout au panier :

```php
add_filter('woocommerce_add_to_cart_validation', 'limiter_quantite', 10, 3);
function limiter_quantite($passed, $product_id, $quantity) {
    if ($quantity > 10) {
        wc_add_notice('Maximum 10 unites par commande.', 'error');
        return false;
    }
    return $passed;
}
```

#### Hooks du Checkout

**7. `woocommerce_checkout_fields` (filtre)** -- Modifier les champs du formulaire de commande :

```php
add_filter('woocommerce_checkout_fields', 'personnaliser_checkout');
function personnaliser_checkout($fields) {
    // Rendre le telephone obligatoire
    $fields['billing']['billing_phone']['required'] = true;

    // Ajouter un champ "Numero de TVA"
    $fields['billing']['billing_tva'] = array(
        'type'        => 'text',
        'label'       => 'Numero de TVA intracommunautaire',
        'placeholder' => 'FR12345678901',
        'required'    => false,
        'class'       => array('form-row-wide'),
        'priority'    => 120,
    );

    // Retirer le champ "Entreprise" pour le B2C
    unset($fields['billing']['billing_company']);

    return $fields;
}
```

**8. `woocommerce_before_checkout_form`** -- Ajouter du contenu avant le formulaire :

```php
add_action('woocommerce_before_checkout_form', 'afficher_reassurance');
function afficher_reassurance() {
    echo '<div class="reassurance-checkout">';
    echo '<span>Paiement securise SSL</span>';
    echo '<span>Retour gratuit 30 jours</span>';
    echo '<span>Support 7j/7</span>';
    echo '</div>';
}
```

**9. `woocommerce_thankyou`** -- Personnaliser la page de confirmation :

```php
add_action('woocommerce_thankyou', 'message_post_commande', 10, 1);
function message_post_commande($order_id) {
    $order = wc_get_order($order_id);
    echo '<div class="merci-custom">';
    echo '<h3>Merci ' . $order->get_billing_first_name() . ' !</h3>';
    echo '<p>Ta commande #' . $order_id . ' est en cours de preparation.</p>';
    echo '<p>Tu recevras un email avec le suivi dans les 24h.</p>';
    echo '</div>';
}
```

#### Hooks Email

**10. `woocommerce_email_before_order_table`** -- Ajouter du contenu dans les emails :

```php
add_action('woocommerce_email_before_order_table', 'promo_dans_email', 10, 4);
function promo_dans_email($order, $sent_to_admin, $plain_text, $email) {
    if ($email->id === 'customer_completed_order') {
        echo '<p style="background:#f0f0f0;padding:15px;text-align:center;">';
        echo '<strong>-10% sur ta prochaine commande avec le code MERCI10</strong>';
        echo '</p>';
    }
}
```

#### Hooks Globaux

**11. `woocommerce_currencies` et `woocommerce_currency_symbol`** -- Ajouter une devise custom :

```php
add_filter('woocommerce_currencies', 'ajouter_devise_custom');
function ajouter_devise_custom($currencies) {
    $currencies['POINTS'] = 'Points Fidelite';
    return $currencies;
}
```

**12. `woocommerce_shipping_methods`** -- Ajouter une methode de livraison custom :

```php
add_filter('woocommerce_shipping_methods', 'ajouter_livraison_locale');
function ajouter_livraison_locale($methods) {
    $methods['retrait_magasin'] = 'WC_Shipping_Retrait_Magasin';
    return $methods;
}
```

**13. `woocommerce_available_payment_gateways` (filtre)** -- Conditionner les moyens de paiement :

```php
add_filter('woocommerce_available_payment_gateways', 'desactiver_cod_gros_panier');
function desactiver_cod_gros_panier($gateways) {
    if (WC()->cart && WC()->cart->get_subtotal() > 500) {
        unset($gateways['cod']); // Pas de paiement a la livraison au-dela de 500 EUR
    }
    return $gateways;
}
```

**14. `woocommerce_order_status_changed`** -- Reagir aux changements de statut :

```php
add_action('woocommerce_order_status_changed', 'notifier_equipe', 10, 4);
function notifier_equipe($order_id, $old_status, $new_status, $order) {
    if ($new_status === 'processing') {
        // Envoyer une notification Slack, SMS, etc.
        wp_mail('equipe@maboutique.com', 'Nouvelle commande #' . $order_id,
            'Montant : ' . $order->get_total() . ' EUR');
    }
}
```

**15. `woocommerce_locate_template` (filtre)** -- Overrider un template WooCommerce :

Pour modifier l'apparence sans hooks, tu peux copier un template de `wp-content/plugins/woocommerce/templates/` vers `wp-content/themes/mon-theme-enfant/woocommerce/` et le modifier librement.

```
woocommerce/
  single-product/
    price.html.php
    meta.html.php
  cart/
    cart.php
  checkout/
    form-checkout.php
```

### Priorités et Ordre d'Execution

Quand tu accroches une fonction a un hook, le troisieme parametre est la **priorite** :

```php
add_action('woocommerce_single_product_summary', 'ma_fonction', 15);
//                                                               ^^ priorite
```

| Priorite | Execution |
|----------|-----------|
| 1-9 | Très tot (avant le contenu par defaut) |
| 10 | Par defaut (la plupart des fonctions WooCommerce) |
| 11-20 | Après le defaut |
| 50+ | Très tard (après presque tout) |

**Astuce :** pour savoir quel hook s'execute ou, installe le plugin "Query Monitor". Il affiche tous les hooks declenches sur chaque page.

## Partie 2 : Filtres de Produits Cote Client

### Pourquoi les Filtres Produits Sont Essentiels

Si ta boutique a plus de 30 produits, tes clients ont besoin de filtres. Les chiffres parlent :

- **76% des acheteurs** considerent le filtrage comme la fonctionnalite la plus importante d'un site e-commerce (etude Baymard Institute)
- Un bon système de filtres augmente le **taux de conversion de 26%** en moyenne
- **42% des boutiques** en ligne n'ont pas de filtrage efficace (c'est une opportunite)

### Filtrage Natif WooCommerce (Widgets)

WooCommerce inclut des widgets de filtrage basiques :

- **Filtrer par prix** : slider min/max
- **Filtrer par attribut** : couleur, taille, etc. (type = select ou swatch)
- **Filtrer par note** : étoiles
- **Filtrer par stock** : en stock / rupture

**Limites :** pas d'AJAX (rechargement de page a chaque filtre), pas de combinaison fluide, UX datee.

### Attributs WooCommerce : La Base du Filtrage

Avant d'installer un plugin de filtrage, configure correctement tes attributs :

```
Produits > Attributs > Ajouter un attribut

Exemple pour une boutique de vetements :
- Couleur (type: couleur/swatch) : Rouge, Bleu, Noir, Blanc
- Taille (type: select) : XS, S, M, L, XL, XXL
- Matiere (type: select) : Coton, Lin, Polyester, Laine
- Marque (type: select) : Nike, Adidas, Puma
```

**Conseil :** utilise des attributs globaux (definis dans Produits > Attributs) plutot que des attributs locaux (definis dans chaque produit). Les attributs globaux sont filtrables, pas les locaux.

### Plugins de Filtrage : Le Comparatif

#### FacetWP (Premium -- 99 USD/an)

Le Rolls-Royce du filtrage WooCommerce :

**Points forts :**
- Filtrage AJAX instantane (pas de rechargement de page)
- Facettes combinables (prix + couleur + taille en même temps)
- Compatible avec n'importe quel theme et n'importe quel page builder
- Types de facettes : checkbox, dropdown, slider, range, search, proximity (geolocalisation)
- Indexation intelligente (les filtres se mettent a jour en fonction des resultats disponibles)

**Cas d'usage :** tu vends des meubles. Le client filtre par "Canape" + "Cuir" + "200-500 EUR" + "Noir". Seuls les produits correspondants s'affichent, sans rechargement.

```php
// Shortcode FacetWP dans ton template
echo facetwp_display('facet', 'couleur');
echo facetwp_display('facet', 'prix');
echo facetwp_display('facet', 'taille');
echo facetwp_display('template', 'produits');
```

**Limites :** payant, un peu technique a configurer, documentation en anglais uniquement.

#### AJAX Product Filter par BeRocket (Gratuit + Premium a 49 USD)

Le meilleur rapport qualité/prix :

**Points forts :**
- Version gratuite fonctionnelle (filtrage AJAX de base)
- Swatches couleur (pastilles cliquables)
- Compatible avec la plupart des themes
- Widgets ou shortcodes

**Limites :** l'interface de configuration est un peu confuse, performances moyennes sur les gros catalogues (> 5 000 produits).

#### WooCommerce Product Filter par FLAVOR (Gratuit)

L'option zero budget :

**Points forts :**
- Entierement gratuit
- Filtrage par categorie, attribut, tag, prix
- Design basique mais propre

**Limites :** pas d'AJAX, options de personnalisation limitees.

#### JetSmartFilters (79 USD/an)

Pour les utilisateurs d'Elementor/Gutenberg :

**Points forts :**
- Integration native Elementor et Gutenberg
- Filtrage AJAX
- Indexation intelligente
- Filtres visuels (swatches, images)

**Limites :** necessite JetEngine pour les filtres avances, écosystème Crocoblock specifique.

### Comparatif Rapide

| Plugin | Prix | AJAX | Swatches | Difficulte | Ideal pour |
|--------|------|------|----------|------------|------------|
| **FacetWP** | 99 USD/an | Oui | Oui | Moyenne | Gros catalogues, sites custom |
| **BeRocket** | Gratuit/49 USD | Oui | Oui | Facile | PME, bon rapport qualité/prix |
| **FLAVOR** | Gratuit | Non | Non | Facile | Petites boutiques |
| **JetSmartFilters** | 79 USD/an | Oui | Oui | Moyenne | Utilisateurs Elementor |
| **Widgets natifs** | Gratuit | Non | Non | Facile | Très petites boutiques |

## UX des Filtres : Les Bonnes Pratiques

### 1. Placement

Les filtres doivent être **visibles immediatement** sur la page catalogue :

- **Desktop** : sidebar gauche (convention e-commerce) ou barre horizontale au-dessus des produits
- **Mobile** : bouton "Filtrer" fixe en bas de l'ecran, qui ouvre un panneau en overlay

**Erreur classique :** cacher les filtres dans un menu hamburger sur mobile. 60% du trafic e-commerce est mobile -- si les filtres sont invisibles, ils n'existent pas.

### 2. Types de Filtres selon le Produit

| Type de produit | Filtres recommandes |
|-----------------|---------------------|
| Vetements | Taille, Couleur (swatches), Prix, Genre, Marque |
| Electronique | Prix, Marque, Ecran, Stockage, Note clients |
| Alimentaire | Regime (bio, vegan, sans gluten), Prix, Provenance |
| Mobilier | Categorie, Materiau, Couleur, Dimensions, Prix |

### 3. Filtres Dynamiques

Les bons plugins masquent automatiquement les options qui ne retournent aucun resultat. Si tu n'as pas de "canape rouge", l'option "Rouge" disparait quand "Canape" est sélectionne. C'est ce qu'on appelle le **contextual filtering**.

### 4. Compteurs de Resultats

Affiche toujours le nombre de produits a cote de chaque option de filtre :

```
Couleur:
[x] Noir (23)
[ ] Bleu (15)
[ ] Rouge (7)
[ ] Vert (0) -- griser ou masquer
```

Ca evite la frustration de cliquer sur un filtre qui ne retourne rien.

### 5. Reinitialisation Facile

Un bouton "Effacer tous les filtres" bien visible. Et la possibilite de retirer un filtre individuel (tags cliquables au-dessus des resultats).

## Impact SEO des Filtres

### Le Problème : Explosion d'URLs

Chaque combinaison de filtres cree potentiellement une URL unique :

```
/boutique/?pa_couleur=rouge
/boutique/?pa_couleur=rouge&pa_taille=m
/boutique/?pa_couleur=rouge&pa_taille=m&min_price=20&max_price=50
```

**Risque :** Google indexe des centaines de pages de filtrage avec du contenu duplique ou quasi vide. Ton budget de crawl explose et ton classement baisse.

### Les Solutions

**1. AJAX sans changement d'URL (recommande)**

Si tes filtres fonctionnent en AJAX sans modifier l'URL, Google ne voit qu'une seule page catalogue. C'est la solution la plus propre.

**2. Balises canonical**

Si les URL changent, ajoute une balise canonical vers la page catalogue principale :

```html
<link rel="canonical" href="https://maboutique.com/boutique/" />
```

**3. Meta robots noindex**

Pour les pages de filtrage, bloque l'indexation :

```php
add_action('wp_head', 'noindex_pages_filtrees');
function noindex_pages_filtrees() {
    if (is_shop() && !empty($_GET)) {
        echo '<meta name="robots" content="noindex, follow">';
    }
}
```

**4. robots.txt**

Bloque les parametres de filtrage dans le robots.txt :

```
# robots.txt
Disallow: /*?pa_couleur=
Disallow: /*?pa_taille=
Disallow: /*?min_price=
Disallow: /*?max_price=
```

**5. Pages de categories optimisees**

Plutot que de compter sur les filtres pour le SEO, cree des **pages de categories bien optimisees** :
- `/boutique/canapes-cuir/` avec un H1, une description de 300+ mots, et des produits pertinents
- Ca cible les recherches type "canape cuir pas cher" bien mieux qu'une page filtree

### Vitesse de Chargement

Les filtres AJAX ajoutent des requetes au serveur. Pour garder la performance :

- **Cache les resultats** : FacetWP a un système d'indexation qui evite les requetes SQL a chaque filtre
- **Lazy load les images** : ne charge les images produits qu'au scroll
- **Limite les filtres affiches** : 4-6 filtres maximum sur une page. Au-dela, ca ralentit et ca surcharge visuellement

## Code Avance : Creer un Filtre Custom

Si les plugins ne suffisent pas, voici comment creer un filtre AJAX custom :

### Le PHP (functions.php ou plugin)

```php
// Endpoint AJAX
add_action('wp_ajax_filtrer_produits', 'filtrer_produits_ajax');
add_action('wp_ajax_nopriv_filtrer_produits', 'filtrer_produits_ajax');

function filtrer_produits_ajax() {
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 12,
        'post_status'    => 'publish',
    );

    // Filtre par categorie
    if (!empty($_POST['categorie'])) {
        $args['tax_query'][] = array(
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => sanitize_text_field($_POST['categorie']),
        );
    }

    // Filtre par prix
    if (!empty($_POST['prix_min']) || !empty($_POST['prix_max'])) {
        $args['meta_query'][] = array(
            'key'     => '_price',
            'value'   => array(
                floatval($_POST['prix_min'] ?? 0),
                floatval($_POST['prix_max'] ?? 99999)
            ),
            'type'    => 'NUMERIC',
            'compare' => 'BETWEEN',
        );
    }

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            wc_get_template_part('content', 'product');
        }
    } else {
        echo '<p class="aucun-resultat">Aucun produit ne correspond a tes criteres.</p>';
    }

    wp_reset_postdata();
    wp_die();
}
```

### Le JavaScript

```javascript
jQuery(document).ready(function($) {
    $('.filtre-form').on('change', 'select, input', function() {
        var data = {
            action: 'filtrer_produits',
            categorie: $('#filtre-categorie').val(),
            prix_min: $('#filtre-prix-min').val(),
            prix_max: $('#filtre-prix-max').val(),
        };

        $.ajax({
            url: wc_ajax_params.ajax_url,
            type: 'POST',
            data: data,
            beforeSend: function() {
                $('.products').addClass('loading');
            },
            success: function(response) {
                $('.products').html(response).removeClass('loading');
            }
        });
    });
});
```

**Attention :** ce code est un point de depart. En production, ajoute la validation, le nonce AJAX (sécurité), la gestion d'erreurs, et le debounce sur les inputs.

## Recapitulatif : Que Choisir ?

| Besoin | Solution |
|--------|----------|
| Modifier le checkout, les prix, les emails | **Hooks PHP** (partie 1) |
| Filtrage basique, petite boutique | **Widgets natifs** WooCommerce |
| Filtrage AJAX, budget serre | **BeRocket AJAX Product Filter** |
| Filtrage avance, gros catalogue | **FacetWP** |
| Utilisateur Elementor | **JetSmartFilters** |
| Besoin ultra-specifique | **Code custom** (AJAX + WP_Query) |

**Le mot de la fin :** les hooks WooCommerce sont la clé pour personnaliser ta boutique sans risquer de perdre tes modifications a la prochaine mise a jour. Et les filtres de produits, c'est l'UX qui fait la difference entre une boutique ou on achete et une boutique ou on part. Investis du temps (ou de l'argent) la-dessus.
