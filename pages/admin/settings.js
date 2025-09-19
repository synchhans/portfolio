import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";
import { RiLoader4Line } from "react-icons/ri";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    headlineLine1: "",
    headlineLine2: "",
    headlineHighlight: "",
    description: "",
    cvUrl: "",
    githubUrl: "",
    instagramUrl: "",
    whatsappUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    aboutHeadline: "",
    aboutHighlight: "",
    aboutDescription: "",
    experienceYears: 0,
    satisfiedClients: 0,
    finishedProjects: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/settings");
        if (!res.ok) throw new Error("Gagal mengambil data pengaturan.");
        const { data } = await res.json();
        if (data) {
          setSettings(data);
        }
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value, 10) : value;
    setSettings((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("Menyimpan...");

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Gagal menyimpan perubahan.");
      }

      setMessage("Perubahan berhasil disimpan!");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
      setTimeout(() => setMessage(""), 3000); 
    }
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-8 flex items-center justify-center h-full">
        <RiLoader4Line className="animate-spin text-accent" size={40} />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <header className="mb-10">
        <Link href="/admin/dashboard" className="text-accent hover:underline">
          &larr; Kembali ke Dashboard
        </Link>
        <h1 className="text-4xl font-bold mt-4">Pengaturan Umum</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg space-y-6"
      >
        <fieldset className="border border-gray-700 p-4 rounded-md">
          <legend className="text-xl font-semibold px-2">
            Halaman Utama (Home)
          </legend>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="headlineLine1" className="block mb-2">
                  Headline Baris 1
                </label>
                <input
                  type="text"
                  id="headlineLine1"
                  name="headlineLine1"
                  value={settings.headlineLine1}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="headlineLine2" className="block mb-2">
                  Headline Baris 2
                </label>
                <input
                  type="text"
                  id="headlineLine2"
                  name="headlineLine2"
                  value={settings.headlineLine2}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="headlineHighlight" className="block mb-2">
                  Headline Highlight
                </label>
                <input
                  type="text"
                  id="headlineHighlight"
                  name="headlineHighlight"
                  value={settings.headlineHighlight}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block mb-2">
                Deskripsi
              </label>
              <textarea
                id="description"
                name="description"
                value={settings.description}
                onChange={handleChange}
                rows="3"
                className="textarea w-full"
              ></textarea>
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-gray-700 p-4 rounded-md">
          <legend className="text-xl font-semibold px-2">Links</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cvUrl" className="block mb-2">
                URL CV
              </label>
              <input
                type="url"
                id="cvUrl"
                name="cvUrl"
                value={settings.cvUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label htmlFor="githubUrl" className="block mb-2">
                URL GitHub
              </label>
              <input
                type="url"
                id="githubUrl"
                name="githubUrl"
                value={settings.githubUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label htmlFor="instagramUrl" className="block mb-2">
                URL Instagram
              </label>
              <input
                type="url"
                id="instagramUrl"
                name="instagramUrl"
                value={settings.instagramUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label htmlFor="whatsappUrl" className="block mb-2">
                URL WhatsApp (wa.me)
              </label>
              <input
                type="url"
                id="whatsappUrl"
                name="whatsappUrl"
                value={settings.whatsappUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label htmlFor="linkedinUrl" className="block mb-2">
                URL LinkedIn
              </label>
              <input
                type="url"
                id="linkedinUrl"
                name="linkedinUrl"
                value={settings.linkedinUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
            <div>
              <label htmlFor="youtubeUrl" className="block mb-2">
                URL YouTube
              </label>
              <input
                type="url"
                id="youtubeUrl"
                name="youtubeUrl"
                value={settings.youtubeUrl}
                onChange={handleChange}
                className="input w-full"
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-gray-700 p-4 rounded-md">
          <legend className="text-xl font-semibold px-2">
            Halaman "About"
          </legend>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="aboutHeadline" className="block mb-2">
                  Headline (Biasa)
                </label>
                <input
                  type="text"
                  id="aboutHeadline"
                  name="aboutHeadline"
                  value={settings.aboutHeadline}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="aboutHighlight" className="block mb-2">
                  Headline (Highlight)
                </label>
                <input
                  type="text"
                  id="aboutHighlight"
                  name="aboutHighlight"
                  value={settings.aboutHighlight}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="aboutDescription" className="block mb-2">
                Deskripsi
              </label>
              <textarea
                id="aboutDescription"
                name="aboutDescription"
                value={settings.aboutDescription}
                onChange={handleChange}
                rows="4"
                className="textarea w-full"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div>
                <label htmlFor="experienceYears" className="block mb-2">
                  Tahun Pengalaman
                </label>
                <input
                  type="number"
                  id="experienceYears"
                  name="experienceYears"
                  value={settings.experienceYears}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="satisfiedClients" className="block mb-2">
                  Klien Puas
                </label>
                <input
                  type="number"
                  id="satisfiedClients"
                  name="satisfiedClients"
                  value={settings.satisfiedClients}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
              <div>
                <label htmlFor="finishedProjects" className="block mb-2">
                  Proyek Selesai
                </label>
                <input
                  type="number"
                  id="finishedProjects"
                  name="finishedProjects"
                  value={settings.finishedProjects}
                  onChange={handleChange}
                  className="input w-full"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <div className="pt-4 flex justify-end items-center gap-x-4">
          {message && <p className="text-sm text-gray-400">{message}</p>}
          <button type="submit" className="btn" disabled={isSaving}>
            {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </div>
  );
};

SettingsPage.getLayout = function getLayout(page) {
  return <AdminLayout pageTitle="Pengaturan Umum">{page}</AdminLayout>;
};

export default SettingsPage;
