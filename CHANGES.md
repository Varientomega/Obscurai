# CHANGES — Lattice family, Atlas, proof classes, written scope (23 Oct 2026, evening)

Committed to main. No Stripe changes. Nothing deployed.

## Merge
- Fast-forwarded to origin/main 594f2db (22 upstream commits: Manifold, Spectral, Duality, Entropy, Causal, Attractor, Omega, Shadow Insight, Sterling Cypher pages; CSS pulse). Local work re-applied; README, epoch.css, index.html, novel-breakthroughs.html conflicts resolved by keeping both sides.
- All six requested lattices already existed upstream, so they were rebuilt to the full showcase standard instead of duplicated.

## Upstream pages brought to the showcase standard (9)
manifold-, spectral-, duality-, entropy-, causal-, attractor-, omega-lattice, shadow-insight, sterling-cypher:
standard nav/footer and OG tags, proof-class labels, "the question it answers", What you get, claims table (upstream wording, outcome-level), engagement steps, what stays sealed, rent-an-agent band with booking.html?agent=…, three-door close.
- Seal fixes: "latent spaces" (Manifold) and "latent patterns" (Shadow Insight) reworded; method-hint phrases ("without disclosing the duality operator", "without explicit DAG disclosure", etc.) removed.
- Shadow Insight: removed the personal-system reference from public copy.
- Use prices kept from upstream, marked [PRICE TO CONFIRM] (not on the main pricing page), except Sterling Cypher $1,500 (listed agent price). Hold standardised to "from $2,500 · NDA".

## New pages (3)
- **lattice-atlas.html** — question → frame table for all 12 lattice frames with proof class and Use price, card grid, "not sure? we match you" band.
- **proof-classes.html** — every claim label on the site explained, what a label never means, how to check results without the method.
- **written-scope.html** — what a written scope contains, four steps, which door needs one. Timing marked [CLAIM TO CONFIRM].

## Funnel and consistency
- New "Lattice family" + "Buy with confidence" sections on index.html and novel-breakthroughs.html; monetize-hub framework doors list all frames + the 3 new pages.
- pricing.html: 9 new rows; links to Atlas and Written Scope. booking.html: 8 new frame options.
- Footer on every page now states: results and reports delivered · frameworks never disclosed · nothing charged before a written scope · vault@obscurai.io. Footer links add Atlas, Proof Classes, Written Scope.
- Frame Workshop: pre-publish checklist (labels, prices, required statements, seal check, links, 375px).

## Cash App
- Every "Pay with Cash App" button, note and script tag removed (cashtag rejected). cashapp-links.js kept with an empty cashtag; it hides any data-cashapp element while empty.

## Checks
- seal.py banned-term list on all 34 HTML files: 0 replacements, clean (seal.py unchanged).
- htmlhint: 34 files, no errors. Link + anchor check: 0 broken.
- 375px (iframe harness): no horizontal overflow, no tap target under 44px on the 11 changed key pages.

---

# CHANGES — merge, showcase, booking and mobile pass (23 Oct 2026)

Local changes only. Nothing committed, pushed, or deployed. No Stripe changes.

## Merge with remote (origin/main 8a32c36 → 1a71a48)
- Stashed local work, fast-forwarded to origin/main (5 new commits: Resonance Lattice, Frame Workshop, Why Sealed, CSS polish, README), then re-applied local work.
- Conflicts and resolutions:
  - **README.md**: both page lists combined into one list, now including every page.
  - **epoch.css**: kept both — upstream polish (hero glow animation, focus states, hover overlays) and local funnel rules (`.doors-close`, `.tbc`, `.label`, price table).
  - **index.html**: upstream cards (Frame Workshop, Why Sealed) and local cards (Triumvirate, MIXWRIGHT, Pricing, Catalogue) kept; duplicated "Book Agent Work"/"Novel Breakthroughs" cards removed; grid rewritten (see below). Upstream nav items (Book Agents, New Frames, Workshop, Why Sealed) folded into the standard nav and footer.
  - **novel-breakthroughs.html**: both card sets kept, duplicate Prime Lattice and Template cards removed; Workshop moved to "Create the Next Frame".
- Upstream pages brought into line: **resonance-lattice.html**, **frame-workshop.html**, **why-sealed.html** got the standard nav, footer, OG tags and three-door close.
- **Seal fixes on upstream content**: resonance-lattice used "latent" and "resonance-based" (both banned by seal.py) → "hidden periodic or hierarchical structure" / "resonance mapping".
- Upstream Resonance Lattice Use price "from $650 / analysis" kept but marked [PRICE TO CONFIRM] (not on the main pricing page); Hold changed from "by quote" to "from $2,500 · NDA" to match pricing.

## Lattice pages expanded to full showcases
sealed-prime-lattice.html, zero-lattice.html, resonance-lattice.html now share one structure: hero with proof-class pills and CTAs → What you get (outcomes only) → Who it’s for → Use cases [CLAIM TO CONFIRM] → Claims and proof class table → How an engagement runs → What stays sealed → "Rent the agent behind it" band (booking.html prefilled + vault@ inquiry) → three doors → related frames.
- Claims are only those already in the repo pages; proof-class labels as stated there. Any benchmark/speed/ratio figure is listed as "Not claimed [CLAIM TO CONFIRM]".
- Prices: Prime Lattice uses KEYSTONE ($750 / pack · $250/hr · audits from $5,000, from deploy/agents); Zero Lattice $500 [PRICE TO CONFIRM]; Resonance Lattice $650 [PRICE TO CONFIRM]; Hold from $2,500 · NDA on all three.

## New showcase pages
- **the-frames-work.html** — The Frames Work, wording from deploy/frames-work and deploy/agents (THE FRAMES). Proof class "In build · specified · no results claimed". Pilot $3,000/month · $150/hr after launch · Hold by quote.
- **tower-prime.html** — Tower Prime, wording from deploy/tower-prime: open doors (Vault, Agent Rentals), offline Site Compression, waitlists (Name Generators, Millennium Toolbox, Q-Base Scry, Extraction Dashboard). Launch dates [CLAIM TO CONFIRM].
- Both linked from index.html, novel-breakthroughs.html and monetize-hub.html. All five showcase frames also added to the pricing.html comparison table.

## Booking page
- **booking.html** — choose agent/frame (12 agents and frames, listed prices from deploy/agents shown live), tier (Witness / Per use / Hourly / NDA retainer), name, email, org, brief, timing. Submit opens a prefilled mailto to vault@obscurai.io (subject "[Booking] AGENT · tier"). No backend, no Stripe. No-JS fallback is a plain mailto form. Accepts `?agent=…&tier=…` so showcase pages preselect. NDA monthly retainer [PRICE TO CONFIRM].
- Linked from the nav ("Book") on every page, footer, index, novel-breakthroughs, monetize-hub, book-agent, and each showcase’s rent band.

## Consistency
- One nav on all 22 pages: Tower · Agents · Showcases · Monetize · Pricing · Book · Contact.
- One footer: Monetize Hub · Pricing · Book an agent · Why Sealed · Frame Workshop · vault@obscurai.io.
- Every page ends with the same `#doors` three-door block. Extra primary buttons demoted (frame-workshop, why-sealed, index hero).

## Mobile (375px) fixes in epoch.css
- Grids use `minmax(min(280px,100%),1fr)` so cards never exceed the viewport.
- Nav is not sticky on ≤640px (no longer covers a third of the screen); nav links, buttons, footer links and filter buttons have ≥44px tap targets.
- Smaller h1/h2/price sizes, tighter section and card padding, kicker letter-spacing reduced, `[PRICE TO CONFIRM]` allowed to wrap, hover lift disabled on touch widths, `overflow-wrap` on body, buttons full width.
- Tables stay inside `.table-wrap` (horizontal scroll); 2-column tables (claims, booking prices) don’t force 640px.
- Form inputs at 16px (no iOS zoom). `prefers-reduced-motion` stops the hero animation.
- Verified: every page measured at 375px — no element wider than the viewport outside table-wraps, no tap target under 44px.

## Checks (this pass)
- seal.py banned-term list run on all 22 HTML files (temp deploy/ copy): 0 replacements, clean. seal.py unchanged.
- htmlhint: 22 files, no errors. Local link + anchor check: 0 broken.
- Screenshots: /workspace/obscurai-work/shots/index-375.png, sealed-prime-lattice-375.png, booking-375.png.
- Backup of pre-merge local copy: /workspace/obscurai-repo.bak-premerge (the git stash entry was also kept).

---

# Earlier pass — funnel, seal and showcase (22 Oct 2026)

Local changes only. Nothing committed, pushed, or deployed. No Stripe changes.

## All HTML pages (16)
- **Standard nav** on every page: Tower · Agents (agent-catalogue.html) · Showcases (novel-breakthroughs.html) · Monetize (monetize-hub.html) · Pricing (pricing.html) · Contact (vault@obscurai.io). Added `aria-label="Main"`.
- **Standard footer** on every page, with links to Monetize Hub, Pricing and vault@obscurai.io.
- **Consistent three-door close** (`<section id="doors" class="doors-close">`) at the end of every page: Witness · see it / Use · get results / Hold · license under NDA, each with a price or [PRICE TO CONFIRM], a door-specific mailto with a tagged subject, plus **one primary CTA** below the doors and links to Pricing and the Monetize Hub.
- Removed the older, inconsistent mid-page door blocks so each page has one door block (monetize-hub, sealed-prime-lattice, zero-lattice, novel-breakthroughs, new-breakthrough-showcase, new-breakthrough-template, next-breakthrough).
- Demoted extra `btn-primary` buttons to `btn-ghost`, keeping only the hero CTA (where one exists) and the door-block CTA as primary.
- Added Open Graph and Twitter tags (`og:type`, `og:site_name`, `og:title`, `og:description`, `twitter:card`) and `theme-color` to every page. Every page already had a meta description; the two new pages have their own.
- "Card checkout coming soon / in progress" → "Card checkout is being set up; paid doors are invoiced by email."

## Default door prices (match /workspace/obscurai/deploy/pricing/index.html)
- Witness: $0 · 1 per org. Use: from $49 / brief · $150–$250/hr. Hold: from $2,500 · NDA (credited to a license).
- Per-page overrides: Agents pages add "VERDICT $350 / claim"; Research portfolio uses Sterling Cypher $1,500 and AFCD-1.42 $79/mo and $2,500 data room, plus sponsorship from $25,000; Prime Lattice uses KEYSTONE $750 / pack · $250/hr; Zero Lattice "$500 / analysis [PRICE TO CONFIRM]" (not on the main pricing page); templates "from $XXX [PRICE TO CONFIRM]"; Triumvirate demo and API prices are [PRICE TO CONFIRM]; MIXWRIGHT $1,500 / analysis and from $5,000 design engagement.
- The old "Use from $350 / run" figure was replaced, because the main pricing page says "from the low $100s" / from $49.

## Seal fixes (wording that seal.py bans or rewrites)
- monetize-hub, agent-catalogue, book-agent: MIXWRIGHT line reworded to "the fastest-mixing schedule for your system, with a checkable guarantee".
- agent-catalogue, book-agent, monetize-hub: VERDICT and KEYSTONE lines reworded to the live-site wording ("judged against criteria fixed in advance", "hard test sets", "sequence computation").
- agent-catalogue: Sterling Cypher reworded to "held to a stated proof standard".
- monetize-hub, breakthroughs, research-portfolio: removed the FiiX corpus name → "second benchmark corpus", labelled "operator benchmark · unaudited".
- new-breakthrough-template: trimmed the sealed list to "method and its parameters" and "working hypotheses".
- next-breakthrough: example claim reworded to "hard test sets".

## Page-specific
- **index.html**: added Triumvirate and MIXWRIGHT cards. Replaced the visible internal deploy note ("Deploy to Cloudflare Pages…") with a contact line. Pricing card now says Witness free / Use from the low $100s / Hold from $2,500.
- **monetize-hub.html**: hero CTA "Choose your door" (jumps to #doors) and "Compare prices". Triumvirate added to Framework doors. MIXWRIGHT links to its page. SEALMARK wording matches the agent page. Proof-class line links to /proof-classes/. The template button is replaced by "All showcases".
- **pricing.html**: rewritten to mirror the main pricing page. It has the full Witness/Use/Hold comparison table (agents, MIXWRIGHT, Shop, Triumvirate, AFCD-1.42, Architect Briefings, Sealed Pods, Sealed License), agent examples, "What you never receive", and the FiiX note.
- **novel-breakthroughs.html** and **breakthroughs.html**: added Triumvirate and MIXWRIGHT entries.
- **agent-catalogue.html** and **book-agent.html**: MIXWRIGHT links to mixwright.html.
- **epoch.css**: added `.doors-close`, `.tbc` (confirm markers), `.label` (proof-class pills), `.price-table`/`.table-wrap`, and the `h2` style. Existing rules unchanged.
- **README.md**: lists the two new pages and the updated pricing page.

## New pages
- **triumvirate.html**: The Triumvirate (our LLM). Uses only approved public wording from deploy/triumvirate. Covers what you get, who it's for, claims and proof class ("Operator claim · unaudited · no published benchmarks" + [CLAIM TO CONFIRM]), the steps, what stays sealed, three doors with [PRICE TO CONFIRM], and an inquiry to vault@obscurai.io.
- **mixwright.html**: MIXWRIGHT agent. Wording from deploy/agents/mixwright. Proof class "A · runnable & reproducible". $1,500 / analysis, hourly [PRICE TO CONFIRM], design from $5,000. Deliverables and case studies marked [CLAIM TO CONFIRM]. Includes how it works, what stays sealed, three doors and an inquiry.

## Checks
- seal.py banned-term list run on every HTML page (copied into a temp `deploy/`): 0 replacements needed, clean. seal.py itself is unchanged.
- htmlhint: 16 files, no errors.
- Local link check: no broken relative links or anchors.
- External links to obscurai.io/briefings, /pods, /proof-classes, /shop and /triumvirate return 404 on the live site today. They exist in the local deploy build and will resolve once it is deployed.

## 23 Oct 2026: Cash App payment path
- NEW cashapp-links.js: one cashtag setting ($AdamKreftMercer) that repoints every "Pay with Cash App" link.
- "Pay with Cash App · $X" links added in the Use door on 13 pages, only for fixed prices already shown: $49 ALMANAC brief, $350 VERDICT claim, $1,500 MIXWRIGHT analysis, $1,500 Sterling Cypher engagement, $79 watch list (first month), $750 KEYSTONE pack, $250/hr.
- Skipped: [PRICE TO CONFIRM] prices (Zero Lattice, Resonance, Triumvirate, templates), "after launch" prices, and every Witness/Hold door. Email buttons unchanged.
