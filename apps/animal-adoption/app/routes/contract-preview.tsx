import { Document, Page, PDFDownloadLink, PDFViewer, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useLocation } from 'react-router';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const Contract = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Animal Adoption Contract</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Animal Name:</Text>
        <Text style={styles.value}>{formData.animalName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Animal Species:</Text>
        <Text style={styles.value}>{formData.animalSpecies}</Text>
      </View>

      {/* Add more fields as needed */}
    </Page>
  </Document>
);

export default function ContractPreview() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-3xl font-bold">Contract Preview</h2>

      <div className="mb-8">
        <PDFViewer className="w-full h-96">
          <Contract formData={formData} />
        </PDFViewer>
      </div>

      <PDFDownloadLink document={<Contract formData={formData} />} fileName="animal-adoption-contract.pdf">
        {({ loading }) => (
          <button
            className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-teal-700"
            disabled={loading}
          >
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
