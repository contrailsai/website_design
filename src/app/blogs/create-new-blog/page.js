"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { supabase } from "@/lib/supabase"

// TipTap
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import CodeBlock from "@tiptap/extension-code-block"
import Blockquote from "@tiptap/extension-blockquote"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import Underline from "@tiptap/extension-underline"

// Icons
import { 
  Save, ImageIcon, ChevronLeft, Search, Plus, 
  Bold, Italic, Code, Quote, List, ListOrdered, Undo, Redo, Link2, 
  AlignLeft, AlignCenter, AlignRight, Type, Heading1, Heading2, 
  Loader2, Settings, X, MoreVertical, Trash2, RefreshCw, CheckCircle2
} from "lucide-react"

// --- HELPER: Upload to R2 ---
const uploadToR2 = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await fetch('/api/blogs/upload', { method: 'POST', body: formData })
  if (!response.ok) throw new Error('Upload failed')
  const data = await response.json()
  return data.url
}

// --- HELPER: Slugify ---
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     
    .replace(/[^\w\-]+/g, '') 
    .replace(/\-\-+/g, '-')   
}

// --- COMPONENT: Tag Input ---
const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const val = input.trim()
      if (val && !tags.includes(val)) {
        setTags([...tags, val])
        setInput("")
      }
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="border rounded-lg p-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 ring-offset-1 transition-all">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-blue-900"><X size={12} /></button>
          </span>
        ))}
      </div>
      <input 
        type="text" 
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type keyword and press Enter..."
        className="w-full text-sm outline-none"
      />
    </div>
  )
}

// --- COMPONENT: Editor Toolbar ---
const EditorToolbar = ({ editor }) => {
  const fileInputRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false)

  if (!editor) return null

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      setIsUploading(true)
      const url = await uploadToR2(file)
      editor.chain().focus().setImage({ src: url }).run()
    } catch (error) {
      alert("Failed to upload image")
    } finally {
      setIsUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  const ToolbarButton = ({ onClick, isActive, disabled, children }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`p-2 rounded transition-colors ${
        isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100 text-gray-600'
      } ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )

  return (
    <div className="border-b border-gray-200 p-2 flex flex-wrap gap-1 bg-white sticky top-0 z-10 shadow-sm items-center">
      <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />

      <div className="flex items-center gap-1 mr-2 border-r pr-2 border-gray-300">
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}><Undo size={18} /></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}><Redo size={18} /></ToolbarButton>
      </div>

      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })}><Heading1 size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })}><Heading2 size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setParagraph().run()} isActive={editor.isActive('paragraph')}><Type size={18} /></ToolbarButton>
      
      <div className="w-px h-6 bg-gray-300 mx-1" />

      <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}><Bold size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}><Italic size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })}><AlignLeft size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })}><AlignCenter size={18} /></ToolbarButton>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}><List size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')}><ListOrdered size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')}><Quote size={18} /></ToolbarButton>
      <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} isActive={editor.isActive('codeBlock')}><Code size={18} /></ToolbarButton>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      <ToolbarButton onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
        {isUploading ? <Loader2 className="animate-spin" size={18} /> : <ImageIcon size={18} />}
      </ToolbarButton>
      <ToolbarButton onClick={() => {
        const url = window.prompt('URL:'); 
        if(url) editor.chain().focus().setLink({ href: url }).run()
      }} isActive={editor.isActive('link')}><Link2 size={18} /></ToolbarButton>
    </div>
  )
}

// --- COMPONENT: Featured Image Dropzone ---
const FeaturedImageUploader = ({ value, onChange }) => {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)

  const handleUpload = async (file) => {
    try {
      setUploading(true)
      const url = await uploadToR2(file)
      onChange(url) // Update state in parent
    } catch (e) { alert("Upload failed"); console.error(e) } 
    finally { setUploading(false) }
  }

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Featured Image</label>
      <div 
        className="relative group border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl transition-all cursor-pointer bg-gray-50 hover:bg-blue-50 overflow-hidden"
        onClick={() => !value && fileInputRef.current?.click()}
      >
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
        
        {uploading ? (
          <div className="h-40 flex items-center justify-center text-blue-500"><Loader2 className="animate-spin mr-2" /> Uploading...</div>
        ) : value ? (
          <>
            <img src={value} alt="Cover" className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button onClick={(e) => { e.stopPropagation(); onChange("") }} className="bg-white/90 p-2 rounded-full text-red-500 hover:bg-white"><Trash2 size={16} /></button>
              <button onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }} className="bg-white/90 p-2 rounded-full text-blue-500 hover:bg-white"><ImageIcon size={16} /></button>
            </div>
          </>
        ) : (
          <div className="h-40 flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="mb-2 w-8 h-8 opacity-50" />
            <span className="text-sm font-medium">Click to upload cover</span>
          </div>
        )}
      </div>
    </div>
  )
}

// --- COMPONENT: Blog Dashboard (Grid View) ---
const BlogDashboard = ({ blogs, onSelect, onCreate, search, setSearch }) => {
  const filtered = blogs.filter(b => b.title?.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b px-8 py-6 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your content and SEO settings</p>
          </div>
          <button onClick={onCreate} className="bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
            <Plus size={18} /> Create New
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            placeholder="Search blogs by title..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(blog => (
            <div 
              key={blog.id} 
              onClick={() => onSelect(blog)} 
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col h-[320px]"
            >
              {/* Card Image */}
              <div className="h-40 bg-gray-100 w-full relative overflow-hidden">
                {blog.featured_image ? (
                  <img src={blog.featured_image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <ImageIcon size={32} />
                  </div>
                )}
                <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wide rounded shadow-sm ${
                  blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {blog.status}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title || 'Untitled Draft'}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                  {blog.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                  <span>Updated: {new Date(blog.updated_st || blog.created_at).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><MoreVertical size={14} /></span>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-400">
              No blogs found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// --- MAIN PAGE COMPONENT ---
const BlogEditorPage = () => {
  // State
  const [mounted, setMounted] = useState(false)
  const [view, setView] = useState('list') 
  const [settingsOpen, setSettingsOpen] = useState(false) 
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [lastSaved, setLastSaved] = useState(null)

  // Form Data
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [status, setStatus] = useState("draft")
  const [description, setDescription] = useState("")
  const [featuredImage, setFeaturedImage] = useState("")
  const [metaDesc, setMetaDesc] = useState("")
  const [tags, setTags] = useState([])

  // REF: Holds the latest state to prevent stale closures during auto-save
  const stateRef = useRef({ title, slug, description, featuredImage, metaDesc, tags, status })
  
  // Update ref whenever state changes
  useEffect(() => {
    stateRef.current = { title, slug, description, featuredImage, metaDesc, tags, status }
  }, [title, slug, description, featuredImage, metaDesc, tags, status])

  useEffect(() => setMounted(true), [])

  // Setup Tiptap
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ HTMLAttributes: { class: 'w-full rounded-lg shadow-md my-6' } }),
      CodeBlock.configure({ HTMLAttributes: { class: 'bg-gray-900 text-white rounded-lg p-4 font-mono text-sm my-4' } }),
      Blockquote.configure({ HTMLAttributes: { class: 'border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4' } }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-blue-600 underline cursor-pointer' } }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline
    ],
    content: "",
    editorProps: {
      // Changed to 'min-h-screen'ish behavior via CSS in the parent, but here we keep it flexible
      attributes: { class: 'prose prose-lg max-w-none focus:outline-none min-h-[500px]' }
    },
    immediatelyRender: false
  }, [mounted])

  // Data Fetching
  const fetchBlogs = useCallback(async () => {
    setLoading(true)
    const { data } = await supabase
      .from("Blogs")
      .select("*")
      .order("updated_st", { ascending: false })
    if (data) setBlogs(data)
    setLoading(false)
  }, [])

  useEffect(() => { if (mounted) fetchBlogs() }, [mounted, fetchBlogs])

  // --- AUTO SAVE LOGIC (FIXED) ---
  // Using a debounce inside useEffect + Ref ensures we always save the LATEST data
  // and we don't accidentally save empty strings over images.
  useEffect(() => {
    if (view !== 'editor' || !selectedId) return

    const saveData = async () => {
      // We read from stateRef to get the absolute latest values
      // This bypasses the stale closure problem of setInterval
      const currentData = stateRef.current
      const content = editor?.getHTML() || ""
      
      if (!currentData.title) return

      setSaving(true)
      
      const payload = {
        title: currentData.title,
        slug: currentData.slug || slugify(currentData.title),
        description: currentData.description,
        content: content,
        featured_image: currentData.featured_image || currentData.featuredImage, // Handle naming diffs
        meta_description: currentData.metaDesc,
        meta_keywords: currentData.tags.join(','),
        status: currentData.status,
        updated_st: new Date().toISOString()
      }

      const { error } = await supabase.from("Blogs").update(payload).eq("id", selectedId)
      
      setSaving(false)
      if (!error) setLastSaved(new Date())
    }

    // Debounce: Wait 3 seconds after last change to save
    const timer = setTimeout(() => {
      saveData()
    }, 3000)

    return () => clearTimeout(timer)
  }, [
    // Depend on all fields so timer resets when user types
    title, slug, description, featuredImage, metaDesc, tags, status, 
    editor?.getHTML(), // This might trigger too often, but for text is okay
    view, selectedId
  ])

  // --- HANDLERS ---

  const handleSelect = (blog) => {
    setSelectedId(blog.id)
    setTitle(blog.title || "")
    setSlug(blog.slug || "")
    setStatus(blog.status || "draft")
    setDescription(blog.description || "")
    setFeaturedImage(blog.featured_image || "")
    setMetaDesc(blog.meta_description || "")
    const k = blog.meta_keywords
    setTags(k ? (Array.isArray(k) ? k : k.split(',').map(s=>s.trim())) : [])
    
    editor?.commands.setContent(blog.content || "")
    setView('editor')
    setSettingsOpen(false)
  }

  const handleCreate = () => {
    setSelectedId(null)
    setTitle(""); setSlug(""); setStatus("draft"); setDescription("")
    setFeaturedImage(""); setMetaDesc(""); setTags([])
    editor?.commands.setContent("<p>Start writing...</p>")
    setView('editor')
    setSettingsOpen(true)
  }

  const generateSlug = () => {
    if(title) setSlug(slugify(title))
  }

  // Manual Save Button
  const handleManualSave = async () => {
    if (!title) return alert("Title is required")
    setSaving(true)
    
    // Use current state directly here since this is an event handler (closures are fine here usually, but consistency is key)
    const payload = {
      title,
      slug: slug || slugify(title),
      description,
      content: editor?.getHTML() || "",
      featured_image: featuredImage,
      meta_description: metaDesc,
      meta_keywords: tags.join(','),
      status,
      updated_st: new Date().toISOString()
    }

    let error;
    if (selectedId) {
      const { error: e } = await supabase.from("Blogs").update(payload).eq("id", selectedId)
      error = e
    } else {
      const { data, error: e } = await supabase.from("Blogs").insert([{ ...payload, views_count: 0 }]).select()
      if (data) setSelectedId(data[0].id)
      error = e
    }

    setSaving(false)
    if (!error) {
      setLastSaved(new Date())
      fetchBlogs() // Refresh background list
    }
  }

  if (!mounted) return null

  if (view === 'list') {
    return (
      <BlogDashboard 
        blogs={blogs} 
        onSelect={handleSelect} 
        onCreate={handleCreate} 
        search={searchTerm} 
        setSearch={setSearchTerm} 
      />
    )
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* --- TOP HEADER --- */}
      <header className="h-16 border-b px-4 flex justify-between items-center bg-white z-30 flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setView('list')} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition">
            <ChevronLeft />
          </button>
          <div className="h-6 w-px bg-gray-300" />
          <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter Blog Title Here..."
            className="text-xl font-bold text-gray-800 outline-none placeholder:text-gray-300 w-[300px] sm:w-[500px]"
          />
          <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            {status}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right mr-2">
            {saving ? (
               <span className="text-xs text-blue-500 flex items-center gap-1"><Loader2 size={12} className="animate-spin" /> Saving...</span>
            ) : lastSaved ? (
               <span className="text-xs text-gray-400 flex items-center gap-1"><CheckCircle2 size={12} /> Saved {lastSaved.toLocaleTimeString()}</span>
            ) : null}
          </div>
          
          <button 
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`p-2 rounded-lg transition-all ${settingsOpen ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100 text-gray-600'}`}
            title="Post Settings"
          >
            <Settings size={20} />
          </button>

          <button
            onClick={handleManualSave}
            disabled={saving}
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all disabled:opacity-50"
          >
            <Save size={16} /> Save
          </button>
        </div>
      </header>

      {/* --- EDITOR AREA --- */}
      <div className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 flex flex-col h-full min-w-0 transition-all duration-300 ease-in-out relative">
          <EditorToolbar editor={editor} />
          
          {/* FIX 1: "White page stops" fix.
              We allow the container to overflow-y (scroll), but the internal div grows infinitely with min-h.
          */}
          <div 
            className="flex-1 overflow-y-auto bg-gray-100 p-8 flex justify-center cursor-text scroll-smooth" 
            onClick={() => editor?.chain().focus().run()}
          >
            <div className="w-full max-w-4xl bg-white shadow-sm rounded-xl px-12 py-12 mb-20 min-h-[calc(100vh-200px)] h-fit">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        {/* --- SETTINGS SIDEBAR (Expanded Width) --- */}
        <div 
          className={`border-l bg-white h-full overflow-y-auto transition-all duration-300 ease-in-out shadow-xl z-20 absolute right-0 top-0 bottom-0
            ${settingsOpen ? 'translate-x-0' : 'translate-x-full opacity-0 pointer-events-none'}`}
          style={{ width: '480px' }} 
        >
          <div className="p-6 space-y-6 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-gray-800">Post Settings</h2>
              <button onClick={() => setSettingsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>

            {/* Featured Image */}
            <FeaturedImageUploader value={featuredImage} onChange={setFeaturedImage} />

            {/* Slug */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">URL Slug</label>
              <div className="flex gap-2">
                <input 
                  value={slug}
                  onChange={e => setSlug(slugify(e.target.value))}
                  className="flex-1 border p-2 rounded text-sm bg-gray-50"
                  placeholder="post-url-slug"
                />
                <button 
                  onClick={generateSlug} 
                  title="Generate from Title"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Publish Status</label>
              <select 
                value={status} 
                onChange={e => setStatus(e.target.value)}
                className="w-full border p-2 rounded bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex justify-between">
                Excerpt
                <span className="font-normal normal-case text-gray-400">{description.length}/300</span>
              </label>
              <textarea 
                value={description} 
                onChange={e => setDescription(e.target.value)}
                rows={5}
                className="w-full border p-3 rounded-lg text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Write a short summary for search engines and social cards..."
              />
            </div>

            {/* Keywords */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Keywords (Tags)</label>
              <TagInput tags={tags} setTags={setTags} />
            </div>

            {/* Meta Description (SEO) */}
            <div className="space-y-2 pt-4 border-t">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">SEO Meta Description</label>
              <textarea 
                value={metaDesc} 
                onChange={e => setMetaDesc(e.target.value)}
                rows={3}
                className="w-full border p-2 rounded text-sm text-gray-600"
                placeholder="Optional: Different from excerpt if needed."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogEditorPage