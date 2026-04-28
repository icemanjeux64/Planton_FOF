            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby97xRyQK-MWPIbjjaHMWXnyE-LpMHKReV2Tq2pWkhNNaJiqToE_dja-YbfEqXhx8Ql/exec";
            let currentPseudo = "";

            // ─── API ─────────────────────────────────────────────────────
            async function callAPI(action, payload = {}, silent = false) {
                const loaderEl = document.getElementById('loader');
                if (loaderEl && !silent) loaderEl.style.display = 'flex';
                try {
                    const r = await fetch(SCRIPT_URL, {
                        method: 'POST',
                        body: JSON.stringify({ action, pseudo: currentPseudo, ...payload }),
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        redirect: 'follow'
                    });
                    const res = await r.json();
                    if (res.status === "error") throw new Error(res.message);
                    return res.data;
                } catch (e) {
                    if (!silent) showToast("ERREUR : " + e.message, "err");
                    throw e;
                } finally {
                    if (loaderEl && !silent) loaderEl.style.display = 'none';
                }
            }

            // ─── INITIALISATION (Vérif session silencieuse) ──────────────
            document.addEventListener('DOMContentLoaded', async () => {
                try {
                    const r = await fetch(SCRIPT_URL, {
                        method: 'POST',
                        body: JSON.stringify({ action: 'checkSession' }),
                        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                        redirect: 'follow'
                    });
                    const res = await r.json();

                    if (res && res.status === 'ok' && res.data && res.data.actif) {
                        // SL déjà en poste → connexion automatique
                        currentPseudo = res.data.pseudo;
                        document.getElementById('displayPseudo').innerText = currentPseudo;
                        const fn = document.getElementById('formateurNom');
                        if (fn) fn.value = currentPseudo;
                        document.getElementById('loginView').classList.add('hidden');
                        document.getElementById('mainView').classList.remove('hidden');
                        showToast('✓ SESSION ACTIVE — ' + currentPseudo, 'ok');
                        syncEffectifs();
                        return;
                    }
                } catch (e) {
                    // Réseau indisponible → on continue vers le formulaire
                    console.log('Vérification session échouée :', e.message);
                }

                // Aucune session → afficher le formulaire de login
                document.getElementById('splashCheck').classList.add('hidden');
                document.getElementById('loginForm').classList.remove('hidden');
            });

            // ─── TOAST ───────────────────────────────────────────────────
            let toastTimer;
            function showToast(msg, type = "ok") {
                const t = document.getElementById('toast');
                if (!t) return;
                t.textContent = msg;
                t.style.opacity = '1';
                t.style.borderColor = type === 'err' ? 'rgba(255,62,62,.5)' : 'rgba(0,242,255,.4)';
                t.style.color = type === 'err' ? '#ff3e3e' : '#00f2ff';
                clearTimeout(toastTimer);
                toastTimer = setTimeout(() => t.style.opacity = '0', 3500);
            }

            // ─── TABS ────────────────────────────────────────────────────
            function switchTab(id, btn) {
                document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.getElementById('tab-' + id).classList.add('active');
                btn.classList.add('active');
            }

            // ─── ACCORDION ───────────────────────────────────────────────
            function toggleAcc(id) {
                document.getElementById(id).classList.toggle('open');
            }

            // ─── PROGRESS ────────────────────────────────────────────────
            const sections = [
                { badge: 'badge-0', ids: ['c1', 'c2', 'c3'] },
                { badge: 'badge-1', ids: ['c4', 'c5', 'c6'] },
                { badge: 'badge-2', ids: ['c7', 'c8', 'c9'] },
                { badge: 'badge-3', ids: ['c10', 'c11', 'c12'] },
                { badge: 'badge-4', ids: ['c13', 'c14', 'c15'] },
                { badge: 'badge-5', ids: ['c16', 'c17', 'c18', 'c19', 'c20'] },
            ];
            const totalItems = sections.reduce((a, s) => a + s.ids.length, 0);

            function updateProgress() {
                let totalChecked = 0;
                sections.forEach(s => {
                    const checked = s.ids.filter(id => document.getElementById(id).checked).length;
                    totalChecked += checked;
                    const el = document.getElementById(s.badge);
                    el.textContent = checked + '/' + s.ids.length;
                    el.className = 'badge' + (checked === s.ids.length ? ' done' : '');
                });
                document.getElementById('globalCount').textContent = totalChecked + '/' + totalItems;
                document.getElementById('globalBar').style.width = (totalChecked / totalItems * 100) + '%';
            }

            // ─── LOGIN ───────────────────────────────────────────────────
            async function handleLogin() {
                const pseudo = document.getElementById('pseudoInput').value.trim().toUpperCase();
                if (!pseudo) return;
                try {
                    currentPseudo = pseudo;

                    // Appel API obligatoire maintenant
                    await callAPI('login');

                    // Maj UI
                    document.getElementById('displayPseudo').innerText = currentPseudo;
                    document.getElementById('formateurNom').value = currentPseudo;
                    document.getElementById('loginView').classList.add('hidden');
                    document.getElementById('mainView').classList.remove('hidden');

                    showToast("✓ PRISE DE SERVICE — " + currentPseudo, "ok");
                    syncEffectifs();
                } catch (e) {
                    currentPseudo = "";
                }
            }

            // ─── LOGOUT ──────────────────────────────────────────────────
            async function handleLogout() {
                try {
                    await callAPI('logout'); // Dit au backend de fermer la session
                } finally {
                    location.reload();
                }
            }

            // ─── COUNTER ─────────────────────────────────────────────────
            function adjust(v) {
                const i = document.getElementById('countInput');
                i.value = Math.max(0, parseInt(i.value || 0) + v);
            }

            // ─── EFFECTIFS ───────────────────────────────────────────────
            async function sendEffectifs() {
                const count = document.getElementById('countInput').value;
                try {
                    await callAPI('effectifs', { count });
                    showToast("✓ EFFECTIFS — " + count + " PERS.", "ok");
                } catch (e) { }
            }

            async function syncEffectifs() {
                if (!currentPseudo) return;
                try {
                    const data = await callAPI('getEffectifs', {}, true); // true = mode silencieux
                    if (data && data.count !== undefined) {
                        document.getElementById('countInput').value = data.count;
                    }
                } catch (e) {
                    // Échec vraiment silencieux maintenant
                }
            }

            // Synchronisation des effectifs toutes les 30 secondes
            setInterval(syncEffectifs, 30000);

            // ─── RECRUTEMENT ─────────────────────────────────────────────
            async function sendRecrutement() {
                const joueur = document.getElementById('recrueNom').value.trim().toUpperCase();
                const formateur = document.getElementById('formateurNom').value.trim().toUpperCase() || currentPseudo;

                if (!joueur) {
                    showToast("⚠ PSEUDO RECRUE REQUIS", "err");
                    document.getElementById('recrueNom').focus();
                    return;
                }

                const nonChecked = [];
                sections.forEach(s => {
                    s.ids.forEach(id => {
                        if (!document.getElementById(id).checked) {
                            nonChecked.push(document.querySelector('label[for="' + id + '"] .chk-text').textContent.trim());
                        }
                    });
                });

                const totalChecked = sections.reduce((a, s) => a + s.ids.filter(id => document.getElementById(id).checked).length, 0);
                const reglement = document.getElementById('c16').checked && document.getElementById('c17').checked;
                const explications = totalChecked >= Math.floor(totalItems * 0.7);

                let notes = document.getElementById('recrueNotes').value.trim();
                if (nonChecked.length > 0) {
                    notes += (notes ? '\n' : '') + '[Non validé: ' + nonChecked.join(', ') + ']';
                }
                notes = `[Accueil: ${totalChecked}/${totalItems} points] ` + notes;

                try {
                    await callAPI('recrutement', {
                        payload: { joueur, recruteur: currentPseudo, formateur: formateur, reglement, explications, notes }
                    });
                    showToast("✓ DOSSIER ARCHIVÉ — " + joueur, "ok");

                    document.getElementById('recrueNom').value = "";
                    document.getElementById('recrueNotes').value = "";
                    document.getElementById('formateurNom').value = currentPseudo;
                    document.querySelectorAll('.chk-wrap').forEach(c => c.checked = false);
                    updateProgress();
                } catch (e) { }
            }
            // Initialisation de l'horloge
            function updateClock() {
                const now = new Date();
                const clockEl = document.getElementById('real-time-clock');
                if (clockEl) {
                    clockEl.textContent = now.toLocaleTimeString('fr-FR', { hour12: false });
                }
            }
            setInterval(updateClock, 1000);
            updateClock();
