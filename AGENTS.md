<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep visitor appearance and language in a root-level React provider with browser storage read after hydration, so both pages share settings without server/client mismatch.
- Keep the site copy translations in a shared client-safe module, so navigation, content, and chat labels use the same language setting.
- Keep the loading sequence in the shared root-mounted LoadingScreen with browser readiness checks and CSS-scoped animation tokens, so every entry page gets the same hydration-safe intro without changing page layouts.
- Register generated coaching videos as CDN asset pointers and render them in a dedicated player with native controls and no autoplay, keeping large media out of the repository and playback visitor-controlled.
- Resolve CDN media through the published LHC origin so the same media can load on Netlify; keep bilingual proof attachment captions in a shared client-safe catalog.
