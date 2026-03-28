# Zilpah Idaa — Personal Site

**Technology stack:** 100% static + serverless — hosted on Netlify, zero server required.

| Feature | Powered by |
|---|---|
| Blog CMS (write posts from browser) | Decap CMS (Netlify CMS) |
| Likes & ratings per post | Supabase (free tier) |
| Email subscribers | Supabase (free tier) |
| Comments on posts | Giscus (GitHub Discussions) |
| Contact form | Netlify Forms |
| Subscribe form | Netlify Forms |

---

## 🚀 Deploy in 5 steps

### Step 1 — Push to GitHub
1. Create a new repo at https://github.com/new (set it to **public**)
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial deploy"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

### Step 2 — Deploy on Netlify
1. Go to https://netlify.com → **Add new site → Import from Git**
2. Connect your GitHub repo
3. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `.` (the root)
4. Click **Deploy site**

### Step 3 — Enable Netlify Identity (for CMS login)
1. In Netlify dashboard → **Site Settings → Identity → Enable Identity**
2. Under **Registration**, choose **Invite only**
3. Go to **Identity → Git Gateway → Enable Git Gateway**
4. In **Identity**, click **Invite users** and invite your own email
5. Check your email and set a password — you can now log into `/admin/`

---

## 📝 Add / Edit Blog Posts

1. Go to your site at `https://your-site.netlify.app/admin/`
2. Log in with the email you invited above
3. Click **Blog Posts → New Blog Post**
4. Write in the markdown editor, upload a cover image, click **Publish**
5. The site rebuilds automatically on Netlify (takes ~30 seconds)

---

## 💾 Set Up Supabase (Likes, Ratings, Subscribers)

1. Go to https://supabase.com → **New Project** (free tier is fine)
2. Note your **Project URL** and **anon public key** (under Settings → API)
3. Open the **SQL Editor** in Supabase and run the contents of `supabase-schema.sql`
4. Open `js/supabase-client.js` and replace:
   ```js
   const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
   const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";
   ```
5. Commit and push — Netlify will redeploy automatically

**To view your subscribers:** Supabase dashboard → Table Editor → `subscribers`

---

## 💬 Set Up Giscus Comments

1. Make sure your GitHub repo is **public** and has **Discussions enabled**
   - Repo Settings → Features → check "Discussions"
2. Go to https://giscus.app
3. Enter your repo name (e.g. `zilpahidaa/my-site`)
4. Choose: Category = **General**, Mapping = **Pathname**
5. Copy the `<script>` tag it generates
6. Open `post/index.html`, find the `<!-- GISCUS COMMENTS SETUP -->` comment
7. Replace the placeholder `<div>` block with your Giscus `<script>` tag
8. Commit and push

---

## 📚 Add Your Book Links

Open `index.html` and search for `selarLink` and `selfanyLink`:
```html
<a href="https://selar.co/YOUR-BOOK" class="bk-btn bk-selar" ...>Buy on Selar</a>
<a href="https://selfany.com/YOUR-BOOK" class="bk-btn bk-selfany" ...>Buy on Selfany</a>
```
Replace `#` with your actual book URLs.

---

## 📸 Add Your Photo

1. Add your photo file to the `/images/` folder (name it `zilpah.jpg`)
2. In `index.html`, find the two placeholder photo sections that say:
   ```
   PHOTO SETUP: Replace the div below with your actual photo:
   ```
3. Replace the placeholder `<div>` with:
   ```html
   <img src="/images/zilpah.jpg" alt="Zilpah Idaa"
        style="width:100%;height:100%;object-fit:cover;object-position:top center;" />
   ```

---

## 📥 Add Your CV

1. Add your CV as `/images/zilpah-cv.pdf`
2. In `index.html` and `js/main.js`, update the `dlCV` function:
   ```js
   function dlCV(e) {
     e.preventDefault();
     window.open('/images/zilpah-cv.pdf', '_blank');
   }
   ```

---

## 📬 Contact Form

Contact form submissions go directly to your Netlify dashboard:
- Netlify Dashboard → **Forms** → you'll see all submissions
- Enable email notifications: Forms → your form → **Form notifications → Add notification → Email**

---

## 🔒 Environment Setup Summary

| Item | Where to configure |
|---|---|
| Photo | Upload to `/images/zilpah.jpg` |
| CV / Resume | Upload to `/images/zilpah-cv.pdf` |
| Book links (Selar/Selfany) | Edit `index.html` |
| Supabase URL & key | Edit `js/supabase-client.js` |
| Giscus script | Edit `post/index.html` |
| CMS login | Netlify Identity → Invite users |
| Form notifications | Netlify Dashboard → Forms |

---

*Built for Zilpah Idaa — SAP PM Consultant · Author · Coach*
