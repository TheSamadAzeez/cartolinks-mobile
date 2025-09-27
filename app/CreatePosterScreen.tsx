import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const posterTypes = [
  { label: 'display', title: 'New Limited Edition', color: '#C7A16E' },
  { label: 'Promotion', title: 'Up to 50% Off', color: '#D9D9D9' },
  { label: 'Branding', title: "Editor's Choice", color: '#A7B3C7' },
  { label: 'Announcement', title: 'Join Us At Our Studio', color: '#B3E3F7' },
  { label: 'Birthday', title: 'Birthday Bash', color: '#F7C7B3' },
];

const sizes = ['1080 x 1920 px'];
const categories = ['Foods and beverage'];

export default function CreatePosterScreen() {
  const [selectedTab, setSelectedTab] = useState('Smart script');
  const [selectedType, setSelectedType] = useState(0);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState(sizes[0]);
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Smart script', 'Advanced script'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.tabActive]}
            onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Question */}
      <Text style={styles.question}>What type of posters do you want to create?</Text>

      {/* Poster Types */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.posterTypes}>
        {posterTypes.map((type, idx) => (
          <TouchableOpacity
            key={type.label}
            style={[
              styles.posterTypeCard,
              selectedType === idx && styles.posterTypeCardActive,
              { backgroundColor: type.color },
            ]}
            onPress={() => setSelectedType(idx)}>
            <Text style={styles.posterTypeTitle}>{type.title}</Text>
            <Text style={styles.posterTypeLabel}>{type.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Description Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Settings */}
      <View style={styles.settings}>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Size</Text>
          <TouchableOpacity style={styles.settingValue}>
            <Text>{size}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Category</Text>
          <TouchableOpacity style={styles.settingValue}>
            <Text>{category}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Generate Button */}
      <TouchableOpacity style={styles.generateBtn}>
        <Text style={styles.generateText}>Generate</Text>
      </TouchableOpacity>

      {/* Footer */}
      {/* <View style={styles.footer}>
        <Text style={styles.footerText}>CapCut</Text>
        <Text style={styles.footerText}>curated by Mobbin</Text>
      </View> */}
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  closeBtn: {
    padding: 8,
  },
  closeText: {
    fontSize: 28,
    color: '#fff',
  },
  time: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginRight: 16,
  },
  tabActive: {
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#aaa',
    fontSize: 16,
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  question: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  posterTypes: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  posterTypeCard: {
    width: 120,
    height: 160,
    borderRadius: 16,
    marginRight: 12,
    padding: 12,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  posterTypeCardActive: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  posterTypeTitle: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  posterTypeLabel: {
    color: '#444',
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    minHeight: 60,
  },
  settings: {
    backgroundColor: '#222',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  settingLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  settingValue: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  generateBtn: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  generateText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
  },
});
